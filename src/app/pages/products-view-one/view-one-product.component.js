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
  constructor( category, route ){
    this.productService = category;
    this.route = route;
    this.product = {};
  }
  ngOnInit(){
    if(this.productService.currentProduct ){
      this.product = this.productService.currentProduct;
    } else {
      this._subs = this.productService.getPublished( )
        .subscribe( res => {
          let tut = res.categories.filter( art => art.link == this.route.params.value.link);
          if(tut.length) {
            this.product = tut[0];
          }
        }, err => { });
    }
  }
  ngOnDestroy(){
    if(this._subs){ this._subs.unsubscribe(); }
  }

}