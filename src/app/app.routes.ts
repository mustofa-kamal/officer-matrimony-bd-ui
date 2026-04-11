import { Routes } from '@angular/router';
import { RegistrationComponent } from './features/registration/registration.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' } // Now it goes to Home by default
];