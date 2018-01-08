import { Component } from "@angular/core";
import { CategoryService, PaginationService } from 'mahrio-header/src/services';
import { ActivatedRoute } from '@angular/router';

import template from './view-one-product.template.html';
import style from './view-one-product.component.scss';

@Component({
  selector: 'view-one-product',
  template,
  styles: [style]
})

export class ViewProductComponent {
  static get parameters(){
    return [CategoryService, ActivatedRoute];
  }
  constructor( article, route ){
    this.articlesService = article;
    this.route = route;
    this.tutorial = {};
  }
  ngOnInit(){
    if(this.articlesService.currentCategory ){
      this.tutorial = this.articlesService.currentCategory;
      console.log( 'the', this.tutorial);
    }
    this._subs = this.articlesService.list( )
      .subscribe( res => {
        let tut = res.categories.filter( art => art.link == this.route.params.value.link);
        if(tut.length) {
          this.tutorial = tut[0];
        }
      }, err => { });
  }
  ngOnDestroy(){
    if(this._subs){ this._subs.unsubscribe(); }
  }

}