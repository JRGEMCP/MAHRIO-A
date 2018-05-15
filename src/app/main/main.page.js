import { Component, ViewEncapsulation } from '@angular/core';

import template from './main.page.html';

import style from '../stylesheets/main.scss';
import { AccessControlService } from 'mahrio-header/src/services';

@Component({
  selector: 'app',
  template,
  styles: [ style ],
  encapsulation: ViewEncapsulation.None,
})

export class MainPage {
  static get parameters(){
    return [AccessControlService]
  }
  constructor(AccessControlService){
    this.access = AccessControlService;
    this.access.loggedIn.subscribe( state => {
      this.loggedIn = state;
    })
  }
}

