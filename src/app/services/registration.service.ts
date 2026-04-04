// src/app/services/registration.service.ts
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RegistrationService {
  private STORAGE_KEY = 'pending_registration';
  
  // Track current step and registration ID
  currentStep = signal<number>(1);
  registrationId = signal<string | null>(null);

  constructor() {
    this.resumeSession();
  }

  // Generate or retrieve UID
  private resumeSession() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      this.registrationId.set(data.uid);
    }
  }

  // The "Patch" Approach
  saveStepData(data: any) {
    if (!this.registrationId()) {
      this.registrationId.set(crypto.randomUUID());
    }

    const existingData = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '{}');
    const updatedData = {
      ...existingData,
      uid: this.registrationId(),
      ...data,
      lastUpdated: new Date().toISOString(),
      stepReached: Math.max(existingData.stepReached || 1, this.currentStep())
    };

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedData));
    console.log('Progress Saved (Local):', updatedData);
    
    // Future Firestore Hook:
    // await setDoc(doc(db, "registrations", this.registrationId()), data, { merge: true });
  }

  getSavedData() {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '{}');
  }
}