import { Component, Input } from '@angular/core';
import { AdComponent } from '../ad-banner/ad.component';

@Component({
  selector: 'app-hero-profile-ad',
  templateUrl: './hero-profile-ad.component.html',
  styleUrls: ['./hero-profile-ad.component.css']
})

export class HeroProfileAdComponent implements AdComponent {
  @Input() data: any;
}
