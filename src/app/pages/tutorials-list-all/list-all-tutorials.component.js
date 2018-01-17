import { Component } from "@angular/core";
import { AccessControlService, ArticleService, ArticleFavoriteService, PaginationService } from 'mahrio-header/src/services';
import { Article, FilterModel, NoFilter, SearchByNameFilter } from 'mahrio-header/src/models';

import template from './list-all-tutorials.template.html';
import style from './list-all-tutorials.style.scss';

@Component({
  selector: 'list-all-tutorials',
  template,
  styles: [style]
})

export class ListAllTutorialsComponent {
  static get parameters(){
    return [AccessControlService, ArticleService, ArticleFavoriteService, PaginationService];
  }
  constructor ( access, articles, favorites, paging ){
    access.token.subscribe( token => {
      if( token ) {
        this.isLoggedIn = !!token
        setTimeout( ()=> {
          this.loadFavorites();
        }, 500);
      } else {
        this.isLoggedIn = false;
      }
    });
    this.articlesService = articles;
    this.favoriteService = favorites;
    this.pagingService = paging;
    this.articles = [];
    this.filters = [ new NoFilter() ];
    this.favorites = [];
  }

  loadFavorites(){
    this.favoriteService.getFavorites().toPromise()
      .then( res => {
        this.favorites = res.favorites

        this.articles.map( article => {
          article.favorite = this.favorites.some(fav => fav === article.id);
        })
      });
  }
  ngOnInit() {
    this._subs = this.articlesService.getPublished()
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

  // FILTERS
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
    let apis = [];
    this.filters.forEach( (filterModel) => {
      if( filterModel.isAnd ){
        apis = this.articles.filter(filterModel.filter);
      }
    });

    this.pagingService.items = apis;
    this.pagingService.setPage(0);
  }

  // FAVORITES
  toggleFavorite( tutorial ){
    if( tutorial.id ) {
      if( tutorial.favorite ) {
        this.favoriteService.removeFavorite( tutorial.id ).toPromise()
          .then( res => { this.articles.find(art => art.id === tutorial.id).favorite = false; this.applyFilters();})
      } else {
        this.favoriteService.setFavorite( tutorial.id ).toPromise()
          .then( res => { this.articles.find(art => art.id === tutorial.id).favorite = true; })
      }
    } else {
      if( this.filters.some(filter => filter.name == 'mahrio.filters.favorites')) {
        this.filters = this.filters.filter( filter => filter.name !== 'mahrio.filters.favorites');
      } else {
        this.filters.push( new FilterModel('mahrio.filters.favorites', 'AND', article => article.favorite) );
      }
      this.applyFilters();
    }
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