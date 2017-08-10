import { Component } from "@angular/core";

import template from './home.page.html';
import style from './home.style.scss';

import { HomeService } from './home.service';

@Component({
  selector: 'home-page',
  template,
  styles: [style]
})

export class HomePage {

  static get parameters(){
    return [HomeService]
  }
  constructor (HomeService){
    this.hacking = HomeService.hacking();
    this.lnks = ['T'];
  }

  ngOnInit () {
  }
}
