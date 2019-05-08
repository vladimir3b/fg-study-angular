import { Advertisement, IAdvertisementModel } from './advertisement.model';

import { HeroJobAdvertisementComponent } from '../../components/hero-job-advertisement/hero-job-advertisement.component';
import { HeroProfileComponent } from '../../components/hero-profile/hero-profile.component';

export const SOME_ADVERTISEMENTS: Array<IAdvertisementModel> = [
  new Advertisement(HeroProfileComponent, {
    name: 'Bombasto',
    bio: 'Brave as they come'
  }),
  new Advertisement(HeroProfileComponent, {
    name: 'Dr IQ',
    bio: 'Smart as they come'
  }),
  new Advertisement(HeroJobAdvertisementComponent, {
    headline: 'Hiring for several positions',
    body: 'Submit your resume today!'
  }),
  new Advertisement(HeroJobAdvertisementComponent, {
    headline: 'Openings in all departments',
    body: 'Apply today'
  })
];
