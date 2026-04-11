import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideFirebaseApp(() => initializeApp({
      "projectId": "jutibd-8a503",
      "appId": "1:439695934136:web:42905df4071e8228602a4d",
      "storageBucket": "jutibd-8a503.firebasestorage.app",
      "apiKey": "AIzaSyClv3EiwH2y8QqJ9EDH2kXY2Vf-Ogx9ue4",
      "authDomain": "jutibd-8a503.firebaseapp.com",
      "messagingSenderId": "439695934136",
      "measurementId": "G-R10VX17GKK"
    })), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore())
  ]
};