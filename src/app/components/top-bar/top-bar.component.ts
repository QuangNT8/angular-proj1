import { Component, OnInit } from '@angular/core';
import { AppsService } from 'src/app/apps.service'; 
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent implements OnInit {
  ex1Description = '';
  
  constructor( private appsService : AppsService  ) { }

  ngOnInit(): void {
    this.ex1Description = this.appsService.getEx1Desctiption();
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/