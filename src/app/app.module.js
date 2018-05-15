//import 'prismjs';

import { AceEditorModule } from 'ng2-ace-editor';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MarkdownModule } from 'ngx-markdown';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeaderModule } from 'mahrio-header/src/header.module';

import { App2RoutingModule } from './app2.routing.js';
import { MainPage } from './main/main.page';
import { Pages} from './pages';
import { Components } from './components';

//import { HomeService } from './pages/home/home.service';

/*@NgModule({
  declarations: [
    MainPage,
    ...Pages,
    ...Components,
  ],
  imports: [
    // Angular 2 related modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AceEditorModule,

    HeaderModule.forRoot(),
    MarkdownModule.forRoot(),
    NgbModule.forRoot(),
    // Put this one last to avoid the 404 route capturing all requests
    AppRoutingModule,
  ],
  providers: [
    HomeService,
  ],
  bootstrap: [
    MainPage
  ],
  exports: [
    HeaderModule,
    AppRoutingModule,
    NgbModule,
    ...Pages,
    ...Components,
  ]
})*/
@NgModule({
  declarations: [MainPage, ...Pages, ...Components],
  imports: [BrowserModule, HttpModule, App2RoutingModule, FormsModule,
    ReactiveFormsModule, AceEditorModule, HeaderModule.forRoot(), MarkdownModule.forRoot()],
  bootstrap: [
    MainPage
  ],
  exports: [...Pages]
})
export class AppModule {}