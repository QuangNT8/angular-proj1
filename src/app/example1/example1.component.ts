import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Item } from '../item';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})

export class Example1Component implements OnInit {

  canSave = false;
  isUnchanged = false;
  isSpecial = false;
  
  item! : Item;
  items : Item[] = [];

  currentItem!: Item;

  currentClasses : Record<string, boolean>={};

  currentStyles: Record<string, string> ={};
  
  constructor() { }

  ngOnInit(): void {
    this.resetItems();
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  setUppercaseName(name: string) {
    this.currentItem.name = name.toUpperCase();
  }

  setCurrentClasses(){
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special:  this.isSpecial
    }
  }

  setCurrentStyles(){
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
  }

  resetItems() {
    this.items = Item.items.map((item) => item.clone());
    this.currentItem = this.items[0];
    this.item = this.currentItem;
  }

  getValue(event: Event): string {
    var test;
    // return (event.target as HTMLInputElement).value;
    test =  (event.target as HTMLInputElement).value;

    // window.alert(test);
    if(test.includes('clear'))
    {
      return '';
    } else {
      return test;
    }
    
  }
}
