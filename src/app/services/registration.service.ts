import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RegistrationService {
  // We keep the step in memory so the UI can switch pages
  currentStep = signal<number>(1);
  
  // This will now be the Firebase UID
  registrationId = signal<string | null>(null);

  constructor() {}

  /**
   * Sets the Registration ID after Firebase creates the user.
   * This links your Step 2 (Photos) to the correct user.
   */
  setRegistrationId(uid: string) {
    this.registrationId.set(uid);
    // We only store the UID locally so if they refresh at Step 2, 
    // we know which user we are working with.
    localStorage.setItem('active_uid', uid);
  }

  /**
   * We've removed the complex LocalStorage JSON saving.
   * Step 1 data is now saved directly to Firestore via AuthService.
   */
  saveStepData(data: any) {
    console.log('Step 1 data received. Auth Service will handle the cloud save.');
    this.currentStep.set(2);
  }

  /**
   * Simple metadata update for Step 2
   */
  saveStep2Data(photoMetadata: any) {
    console.log('Photos ready for:', this.registrationId());
    this.currentStep.set(3);
  }

  /**
   * Helper to retrieve the current UID from memory or storage
   */
  getUid(): string | null {
    return this.registrationId() || localStorage.getItem('active_uid');
  }

  /**
   * Call this when registration is fully finished to clean up
   */
  clearSession() {
    this.registrationId.set(null);
    this.currentStep.set(1);
    localStorage.removeItem('active_uid');
  }
}