import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { AboutComponent } from './about/about.component';
import { CaseStudiesComponent } from './casestudies/casestudies.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ProgrammierungComponent } from './programmierung/programmierung.component';
import { KIComponent } from './kuenstliche-intelligenz/ki.component';
import { BarrierefreiheitComponent } from './barrierefreiheit/barrierefreiheit.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'casestudies', component: CaseStudiesComponent },
  { path: 'programmierung', component: ProgrammierungComponent },
  { path: 'kuenstliche-intelligenz', component: KIComponent },
  { path: 'barrierefreiheit', component: BarrierefreiheitComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: '**', redirectTo: '' },
];
