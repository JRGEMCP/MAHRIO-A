import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import template from './home.template.html';
import style from './home.style.scss';

@Component({
  selector: 'home',
  template,
  styles: [ style ]
})

export class HomeComponent {

  static get parameters(){
    return [Http];
  }

  constructor(Http){
    this.http = Http;
  }

  ngOnInit(){
    this.http.get('/api/pages/home')
      .map(response => response._body)
      .toPromise().then( res => {
        this.home = res;
      });
  }

}

