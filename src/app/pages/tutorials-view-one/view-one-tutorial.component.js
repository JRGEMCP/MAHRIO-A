import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import template from './view-one-tutorial.template.html';
import { ArticleService } from 'mahrio-header/src/services';

@Component({
  selector: 'view-one-tutorial',
  template
})

export class ViewTutorialComponent {
  static get parameters(){
    return [ArticleService, ActivatedRoute];
  }
  constructor( article, route ){
    this.articlesService = article;
    this.route = route;
    this.tutorial = {};
  }
  ngOnInit(){

    if(this.articlesService.currentArticle ){
      this.tutorial = this.articlesService.currentArticle;
    }
   this._subs = this.articlesService.gett( this.route.params.value.link )
      .subscribe( res => {
        this.tutorial = res.article;
      }, err => {

      });
  }
  ngOnDestroy(){
    if(this._subs){ this._subs.unsubscribe(); }
  }

}