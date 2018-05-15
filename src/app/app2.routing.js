import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainPage } from "./main/main.page";
import {
  HomePage,
  AboutPage,
  PrivacyPage,
  ListAllTutorialsComponent,
  ViewTutorialComponent,
  ListAllFeaturesComponent,
  ViewFeatureComponent,
  ListAllProductsComponent,
  ViewProductComponent,
  ListAllCoursesComponent,
  ViewCourseComponent
} from './pages';

const Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      { path: '', component: HomePage},
      { path: 'about-us', component: AboutPage},
      { path: 'privacy', component: PrivacyPage},
      { path: 'tutorials', component: ListAllTutorialsComponent },
      { path: 'tutorial/:link', component: ViewTutorialComponent },
      { path: 'features', component: ListAllFeaturesComponent },
      { path: 'feature/:link', component: ViewFeatureComponent },
      { path: 'products', component: ListAllProductsComponent },
      { path: 'product/:link', component: ViewProductComponent },
      { path: 'courses', component: ListAllCoursesComponent },
      { path: 'course/:link', component: ViewCourseComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(Routes) ],
  exports: [ RouterModule ],
})
export class App2RoutingModule { }

