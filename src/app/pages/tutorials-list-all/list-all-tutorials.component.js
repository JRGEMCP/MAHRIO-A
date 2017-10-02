import { Component } from "@angular/core";
import { ArticleService, PaginationService } from 'mahrio-header/src/services';
import { Article } from 'mahrio-header/src/models';

import template from './list-all-tutorials.template.html';
import style from './list-all-tutorials.style.scss';

@Component({
  selector: 'list-all-tutorials',
  template,
  styles: [style]
})

export class ListAllTutorialsComponent {
  static get parameters(){
    return [ArticleService, PaginationService];
  }
  constructor ( articles, paging ){
    this.articlesService = articles;
    this.pagingService = paging;
    this.articles = [];
    this.filters = ['Deployed'];
  }

  ngOnInit() {
    this._subs = this.articlesService.gett(null)
      .subscribe( res=> {
        res.articles.forEach( (article, i) => {
          this.articles.push( Article.fromPayload(article) );

        });
        this.pagingService.items = this.articles;
        this.pagingService.setPage(0);
      });
  }
  ngOnDestroy(){
    if( this._subs ) { this._subs.unsubscribe(); }
  }
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