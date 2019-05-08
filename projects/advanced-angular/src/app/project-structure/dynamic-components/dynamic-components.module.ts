import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootDynamicComponentsComponent } from './components/root-dynamic-components/root-dynamic-components.component';
import { AddComponentsDirective } from './directives/add-components.directive';
import { HeroProfileComponent } from './components/hero-profile/hero-profile.component';
import { HeroJobAdvertisementComponent } from './components/hero-job-advertisement/hero-job-advertisement.component';

@NgModule({
  declarations: [
    RootDynamicComponentsComponent,
    AddComponentsDirective,
    HeroJobAdvertisementComponent,
    HeroProfileComponent
  ],
  entryComponents: [
    HeroJobAdvertisementComponent,
    HeroProfileComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class  DynamicComponentsModule { }
