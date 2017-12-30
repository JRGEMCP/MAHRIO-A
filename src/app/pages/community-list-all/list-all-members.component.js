import { Component } from "@angular/core";
import { AccessControlService, ArticleService, ArticleFavoriteService, PaginationService } from 'mahrio-header/src/services';
import { Article, FilterModel, NoFilter, SearchByNameFilter } from 'mahrio-header/src/models';

import template from './list-all-members.template.html';
import style from './list-all-members.style.scss';

@Component({
  selector: 'list-all-members',
  template,
  styles: [style]
})

export class ListAllMembersComponent {
  constructor(){

  }
}