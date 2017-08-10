import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage, AboutPage, PrivacyPage, FourOhFourPage } from './pages';
import { TutorialsPage, TutorialsCreatePage } from './tutorials';

const Routes = [
  { path: '', component: HomePage},
  { path: 'about-us', component: AboutPage },
  { path: 'privacy', component: PrivacyPage },
  { path: 'tutorials', component: TutorialsPage },
  { path: 'tutorials/create', component: TutorialsCreatePage },
  { path: '**', component: FourOhFourPage, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(Routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }

