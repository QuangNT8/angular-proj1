import { Component, OnInit } from '@angular/core';
import { AdService } from '../ad.service';
import { AdItem } from '../ad-item';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit {
  ads: AdItem[] = [];

  constructor(private adService : AdService) { }

  ngOnInit(): void {
    this.ads = this.adService.getAds();
  }

}
