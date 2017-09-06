import { Component } from '@angular/core';

import template from './tutorials.template.html';
import { AccessControlService } from '../../../services';

@Component({
  selector: 'tutorials',
  template
})

export class TutorialsPage {
  static get parameters(){
    return [AccessControlService];
  }

  constructor( AccessControlService ){
    this.access = AccessControlService
  }
  ngOnInit(){
    this.access.token.subscribe( token => {
      if( token ) {
        this.showCreate = true;
      } else {
        this.showCreate = false;
      }
    });
  }
}