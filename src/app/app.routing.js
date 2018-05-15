import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  ListAllTutorialsComponent,
  ListAllFeaturesComponent,
  ListAllProductsComponent,
  ListAllCoursesComponent,
  ListAllMembersComponent,
  ViewTutorialComponent,
  ViewFeatureComponent,
  ViewProductComponent,
  ViewCourseComponent,
  TutorialsPage, TutorialsCreatePage,
  HomePage, AboutPage, PrivacyPage, FourOhFourPage
} from './pages';

const Routes = [
  { path: '', component: HomePage},
  { path: 'about-us', component: AboutPage },
  { path: 'privacy', component: PrivacyPage },

  { path: 'tutorials', component: ListAllTutorialsComponent },
  { path: 'tutorial/:link', component: ViewTutorialComponent },

  { path: 'features', component: ListAllFeaturesComponent },
  { path: 'feature/:link', component: ViewFeatureComponent },
  { path: 'products', component: ListAllProductsComponent },
  { path: 'product/:link', component: ViewProductComponent },
  { path: 'courses', component: ListAllCoursesComponent },
  { path: 'courses/:link', component: ViewCourseComponent },

  { path: '**', component: FourOhFourPage, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forChild(Routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }

