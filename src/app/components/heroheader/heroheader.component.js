import { Component } from '@angular/core';
import template from './heroheader.template.html';
import style from './heroheader.style.scss';

@Component({
  selector: 'hero-header',
  template,
  styles: [style],
  inputs: ['title']
})

export class HeroHeaderComponent {
}