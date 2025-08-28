import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { AboutComponent } from './about/about.component';
import { CaseStudiesComponent } from './casestudies/casestudies.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'casestudies', component: CaseStudiesComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: '**', redirectTo: '' },
];
