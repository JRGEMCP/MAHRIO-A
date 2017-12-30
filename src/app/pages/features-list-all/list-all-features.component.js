import { Component } from "@angular/core";
import { TopicService, PaginationService } from 'mahrio-header/src/services';

import template from './list-all-features.template.html';
import style from './list-all-features.style.scss';

@Component({
  selector: 'list-all-features',
  template,
  styles: [style]
})

export class ListAllFeaturesComponent {
  static get parameters(){
    return [TopicService, PaginationService];
  }
  constructor ( topics, paging ){
    this.topicService = topics;
    this.pagingService = paging;
  }
  ngOnInit() {
    this._subs = this.topicService.list()
        .subscribe( res => {
          this.pagingService.items = res.topics;
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