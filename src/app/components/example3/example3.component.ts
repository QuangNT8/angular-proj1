import { Component } from '@angular/core';

import { LoggerService } from 'src/app/services/logger.service';
import { Sub1example3Component } from './sub1example3/sub1example3.component';

// templateUrl: './example3.component.html',
@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.css'],
  providers:  [ LoggerService ]
})
export class Example3Component {

  hasChild = false;
  hookLog: string[] = [];

  heroName = 'Hello';
  // private logger: LoggerService;

  constructor(private logger: LoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  toggleChild() {
    this.hasChild = !this.hasChild;
    
    if (this.hasChild) {
      this.heroName = 'Say Hello!';
      this.logger.clear(); // clear log on create
      window.alert('Created');
    }

    this.hookLog = this.logger.logs;
    this.logger.tick();
  }

  updateHero() {
    this.heroName += '!';
    this.logger.tick();
  }

}
