import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class TutorialService {
  static get parameters(){
    return [Http];
  }
  constructor( http ){
    this.http = http;
    this.token = null;
  }
  setToken( token ) {
    this.token = token;
  }
  auth(){ return this.token; }
}