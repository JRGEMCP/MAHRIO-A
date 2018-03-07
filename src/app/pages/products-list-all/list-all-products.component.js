import { Component } from "@angular/core";
import { CategoryService, PaginationService } from 'mahrio-header/src/services';

import template from './list-all-products.template.html';
import style from './list-all-products.style.scss';

@Component({
  selector: 'list-all-products',
  template,
  styles: [style]
})

export class ListAllProductsComponent {
  static get parameters(){
    return [CategoryService, PaginationService];
  }
  constructor ( category, paging ){
    this.categoryService = category;
    this.pagingService = paging;
  }
  ngOnInit() {
    this._subs = this.categoryService.getPublished()
      .subscribe( res => {
        this.pagingService.items = res.categories;
        this.pagingService.setPage(0);
        console.log('HERE', res);
      });
  }
  ngOnDestroy(){
    if( this._subs ) { this._subs.unsubscribe(); }
  }

  // PAGINATION
  change($event){
    switch($event.type){
      case 'first':
        this.pagingService.first();
        break;
      case 'prev':
        this.pagingService.prev();
        break;
      case 'next':
        this.pagingService.next();
        break;
      case 'last':
        this.pagingService.last();
        break;
      case 'page':
        this.pagingService.setPage( $event.num );
    }
  }
}