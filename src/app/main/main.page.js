import { Component, ViewEncapsulation } from '@angular/core';

import template from './main.page.html';

import style from '../stylesheets/main.scss';
import { AccessControlService } from '../services';
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
  }

  auth( token ){
    console.log( 'Token:'+token );
    this.access.token = token;
  }
}

