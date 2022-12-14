import { Injectable } from '@angular/core';
import { HeroJobAdComponent } from '../components/hero-job-ad/hero-job-ad.component';
import { HeroProfileAdComponent } from '../components/hero-profile-ad/hero-profile-ad.component';
import { AdItem } from '../models/ad-item'; 

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem(HeroProfileAdComponent, {
        name: 'Bombasto',
        bio: 'Brave as they come',
      }),
      new AdItem(HeroProfileAdComponent, {
        name: 'Dr IQ',
        bio: 'Smart as they come',
      }),
      new AdItem(HeroJobAdComponent, {
        headline: 'Hiring for several positions',
        body: 'Submit your resume today!',
      }),
      new AdItem(HeroJobAdComponent, {
        headline: 'Openings in all departments',
        body: 'Apply today',
      }),
    ];
  }
}
