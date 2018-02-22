import { Component } from "@angular/core";
import { CourseService, PaginationService } from 'mahrio-header/src/services';

import template from './list-all-courses.template.html';
import style from './list-all-courses.style.scss';

@Component({
  selector: 'list-all-courses',
  template,
  styles: [style]
})

export class ListAllCoursesComponent {
  static get parameters(){
    return [CourseService, PaginationService];
  }
  constructor ( course, paging ){
    this.courseService = course;
    this.pagingService = paging;
  }
  ngOnInit() {
    this._subs = this.courseService.list()
      .subscribe( res => {
        this.pagingService.items = res.courses;
        this.pagingService.setPage(0);
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