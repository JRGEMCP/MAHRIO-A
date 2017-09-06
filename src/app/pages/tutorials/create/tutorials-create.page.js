import { Component } from '@angular/core';
import { Router } from '@angular/router';
import template from './tutorials-create.template.html';

import { AccessControlService } from '../../../services';
@Component({
  selector: 'tutorials-create',
  template
})

export class TutorialsCreatePage {
  static get parameters(){
    return [AccessControlService, Router];
  }
  constructor(AccessControlService, Router){
    this.access = AccessControlService;
    this.router = Router;

    this.title = 'TESTING';
  }
  ngOnInit(){
    this.access.token.subscribe( token => {
      if( token ) {
        console.log('in there');
      } else {
        console.log('not there');
        //this.router.navigate(['/']);
      }
    });
  }
}