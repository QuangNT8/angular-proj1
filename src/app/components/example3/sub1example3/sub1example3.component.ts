import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { Sub1example3Directive } from '../sub1example3.directive';

@Component({
  selector: 'app-sub1example3',
  
  template: `
    <p>
      Now you see Sub Example 3!, {{name}}
    </p>
  `
})

export class Sub1example3Component extends Sub1example3Directive implements OnInit, DoCheck {

  @Input() name = '';

  constructor(logger : LoggerService) { 
    super(logger);
    const is = this.name ? 'is' : 'is not';
    this.logIt(`name ${is} known at construction`);
  }

  ngDoCheck() { 
    this.logIt('DoCheck'); 
  }
}
