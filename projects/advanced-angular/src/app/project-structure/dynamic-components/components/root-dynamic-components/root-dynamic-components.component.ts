import {
  Component,
  OnInit,
  ViewChild,
  ComponentFactoryResolver
} from '@angular/core';

import { SOME_ADVERTISEMENTS } from './../../data/models/advertisements.data';
import { IAdvertisementModel } from '../../data/models/advertisement.model';
import { AddComponentsDirective } from '../../directives/add-components.directive';

@Component({
  selector: 'fg-root-dynamic-components',
  templateUrl: './root-dynamic-components.component.html'
})
export class RootDynamicComponentsComponent implements OnInit {
  advertisements: Array<IAdvertisementModel>;
  advertisementIndex = 0;
  @ViewChild(AddComponentsDirective) advertisementHost: AddComponentsDirective;

  get advertisement(): IAdvertisementModel {
    return this.advertisements[this.advertisementIndex];
  }

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.advertisements = [ ...SOME_ADVERTISEMENTS];
    this.loadComponent();
  }

  loadComponent(): void {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(this.advertisement.component);
    const viewContainerRef = this.advertisementHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = this.advertisement.data;
  }
  changeAdvertisement(): void {
    this.advertisementIndex = (this.advertisementIndex + 1) % this.advertisements.length;
    this.loadComponent();
  }

}
