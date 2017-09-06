import { HomePage } from './home/home.page';
import { FourOhFourPage } from './404/404.page';
import { AboutPage } from './about/about.page';
import { PrivacyPage } from './privacy/privacy.page';
import { TutorialsPage, TutorialsCreatePage, Tutorials } from './tutorials';
import { ListAllTutorialsComponent } from './tutorials-list-all/list-all-tutorials.component';
import { ViewTutorialComponent } from './tutorials-view-one/view-one-tutorial.component';

export {
  HomePage,
  FourOhFourPage,
  AboutPage,
  PrivacyPage,

  TutorialsPage, TutorialsCreatePage,
  Tutorials,
  ListAllTutorialsComponent,
  ViewTutorialComponent,
};

export const Pages = [
  HomePage,
  FourOhFourPage,
  AboutPage,
  PrivacyPage,

  Tutorials,
  ListAllTutorialsComponent,
  ViewTutorialComponent,
];
