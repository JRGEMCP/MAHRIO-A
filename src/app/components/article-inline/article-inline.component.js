import { Component } from '@angular/core';

import template from './article-inline.template.html';

@Component({
  selector: 'article-inline',
  template,
  inputs: ['tutorial']
})

export class ArticleInlineComponent { }