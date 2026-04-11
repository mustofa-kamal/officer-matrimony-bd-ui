import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { ProfilesComponent } from './features/profiles/profiles.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'profiles', component: ProfilesComponent }, // Clean URL for your gallery
  { path: '**', redirectTo: '' }
];