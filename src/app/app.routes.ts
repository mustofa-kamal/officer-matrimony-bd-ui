import { Routes } from '@angular/router';
import { RegistrationComponent } from './features/registration/registration.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  // This is your landing page (http://localhost:4200)
  { path: '', component: HomeComponent }, 
  
  // This is your registration page (http://localhost:4200/registration)
  { path: 'registration', component: RegistrationComponent },
  
  // This catches everything else and sends it home
  { path: '**', redirectTo: '' }
];