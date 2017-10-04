import { Component } from "@angular/core";
import { ArticleService, PaginationService } from 'mahrio-header/src/services';
import { Article, NoFilter, SearchByNameFilter } from 'mahrio-header/src/models';

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
    this.filters = [ new NoFilter() ];
  }

  ngOnInit() {
    this._subs = this.articlesService.gett(null)
      .subscribe( res => {
        res.articles.forEach( (article, i) => {
          this.articles.push( Article.fromPayload(article) );
        });
        this.applyFilters();
      });
  }
  ngOnDestroy(){
    if( this._subs ) { this._subs.unsubscribe(); }
  }
  setSearchFilter( val ){
    if( val !== '' ) {
      this.addSearchFilter( val );
    } else {
      this.removeSearchFilter();
    }
    this.applyFilters();
    this.pagingService.setPage(0);
  }
  addSearchFilter( val ){
    if( this.filters.some( f => f.name === 'mahrio.filters.searchbyname') ) {
      this.filters.find( f => f.name === 'mahrio.filters.searchbyname').searchString = val;
    } else {
      this.filters.push( new SearchByNameFilter(val) );
    }
  }
  removeSearchFilter(){
    this.filters = this.filters.filter( f => f.name !== "mahrio.filters.searchbyname");
  }
  applyFilters(){
    console.log( this.filters );
    let apis = [];
    this.filters.forEach( (filterModel) => {
      if( filterModel.isAnd ){
        apis = this.articles.filter(filterModel.filter);
      }
    });

    this.pagingService.items = apis;
    this.pagingService.setPage(0);
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