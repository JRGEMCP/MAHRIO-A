import { Component } from "@angular/core";
import { TopicService, PaginationService } from 'mahrio-header/src/services';

import { ActivatedRoute } from '@angular/router';

import template from './view-one-feature.template.html';
import style from './view-one-feature.component.scss';

@Component({
  selector: 'view-one-feature',
  template,
  styles: [style]
})

export class ViewFeatureComponent {
  static get parameters(){
    return [TopicService, ActivatedRoute];
  }
  constructor( article, route ){
    this.articlesService = article;
    this.route = route;
    this.tutorial = {};
  }
  ngOnInit(){
    if(this.articlesService.currentTopic ){
      this.tutorial = this.articlesService.currentTopic;
    }
    console.log( this.route.params.value.link );
    this._subs = this.articlesService.list()
      .subscribe( res => {console.log( res );
        let tut = res.topics.filter( art => art.link == this.route.params.value.link);
        if(tut.length) {
          this.tutorial = tut[0];
        }
        console.log( this.tutorial);
      }, err => { });
  }
  ngOnDestroy(){
    if(this._subs){ this._subs.unsubscribe(); }
  }

}