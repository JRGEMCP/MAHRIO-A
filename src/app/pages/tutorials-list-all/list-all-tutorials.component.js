import { Component } from "@angular/core";
import { ArticleService } from 'mahrio-header/src/services';

import template from './list-all-tutorials.template.html';

@Component({
  selector: 'list-all-tutorials',
  template
})

export class ListAllTutorialsComponent {
  static get parameters(){
    return [ArticleService];
  }
  constructor ( articles ){
    this.articlesService = articles;
    this.articles = [];
  }

  ngOnInit() {
    this.articlesService.gett().then( res=> {
      this.articles = res.articles;
    })
  }
}
