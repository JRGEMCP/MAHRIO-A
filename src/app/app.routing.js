import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage, AboutPage, PrivacyPage, FourOhFourPage } from './pages';

const Routes = [
  { path: '', component: HomePage},
  { path: 'about-us', component: AboutPage },
  { path: 'privacy', component: PrivacyPage },
  { path: '**', component: FourOhFourPage, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(Routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }

