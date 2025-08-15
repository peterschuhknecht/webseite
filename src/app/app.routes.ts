import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { KontaktComponent } from './kontakt/kontakt.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: '**', redirectTo: 'home' },
];
