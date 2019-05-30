import * as example01 from './../example01/example01.router';
import * as example02 from './../example02/example02.router';
import * as example03 from './../example03/example03.router';


export const TEMPLATES_ROUTES = {
  ...example01.TEMPLATES_ROUTES,
  ...example02.TEMPLATES_ROUTES,
  ...example03.TEMPLATES_ROUTES
};
