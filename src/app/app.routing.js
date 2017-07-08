import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage, AboutPage, FourOhFourPage } from './pages';

const Routes = [
  { path: '', component: HomePage},
  { path: 'about', component: AboutPage },
  { path: '**', component: FourOhFourPage, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(Routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }

