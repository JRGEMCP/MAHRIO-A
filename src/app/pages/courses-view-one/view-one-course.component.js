import { Component } from "@angular/core";
import { CourseService, PaginationService } from 'mahrio-header/src/services';
import { ActivatedRoute } from '@angular/router';

import template from './view-one-course.template.html';
import style from './view-one-course.component.scss';

@Component({
  selector: 'view-one-course',
  template,
  styles: [style]
})

export class ViewCourseComponent {
  static get parameters(){
    return [CourseService, ActivatedRoute];
  }
  constructor( course, route ){
    this.courseService = course;
    this.route = route;
    this.course = {};
  }
  ngOnInit(){
    if(this.courseService.currentCourset ){
      this.course = this.courseService.currentProduct;
    }
    this._subs = this.courseService.getPublished( )
      .subscribe( res => {
        let tut = res.courses.filter( art => art.link == this.route.params.value.link);
        if(tut.length) {
          this.course = tut[0];
        }
      }, err => { });
  }
  ngOnDestroy(){
    if(this._subs){ this._subs.unsubscribe(); }
  }

}