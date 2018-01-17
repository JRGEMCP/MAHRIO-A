import { Component } from "@angular/core";
import { TopicService, PaginationService } from 'mahrio-header/src/services';
import { Feature } from 'mahrio-header/src/models';
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
    this._subs = this.articlesService.list()
      .subscribe( res => {console.log( res );
        let tut = res.topics.filter( art => art.link == this.route.params.value.link);
        if(tut.length) {
          this.tutorial = Feature.fromPayload(tut[0]);
        }
      }, err => { });
  }
  ngOnDestroy(){
    if(this._subs){ this._subs.unsubscribe(); }
  }

}