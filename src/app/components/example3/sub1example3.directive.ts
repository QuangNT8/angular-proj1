import { Directive, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

let nextId = 1;

@Directive({
  selector: '[appSub1example3]'
})

export class Sub1example3Directive implements OnInit {

  constructor(private logger: LoggerService) { }
  
  ngOnInit() {
    this.logIt('OnInit');
  }

  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }

}
