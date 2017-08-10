import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeaderModule } from 'mahrio-header/src/header.module';

import { AppRoutingModule } from './app.routing.js';
import { MainPage } from './main/main.page';
import { Pages} from './pages';
import { Tutorials } from './tutorials';
import { Components } from './components';

import { HomeService } from './pages/home/home.service';

@NgModule({
  declarations: [
    MainPage,
    ...Pages,
    ...Tutorials,
    ...Components,
  ],
  imports: [
    // Angular 2 related modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    HeaderModule,
    NgbModule.forRoot(),
    // Put this one last to avoid the 404 route capturing all requests
    AppRoutingModule,
  ],
  providers: [
    HomeService
  ],
  bootstrap: [
    MainPage
  ]
})
export class AppModule { }
