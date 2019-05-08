import { Type } from '@angular/core';

export interface IAdvertisementModel {
  component: Type<any>;
  data: any;
}

export class Advertisement implements IAdvertisementModel {
  constructor(
    public component: Type<any>,
    public data: any
  ) {}
}
