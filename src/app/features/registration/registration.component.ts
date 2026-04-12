import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';
import { UiService } from '../../services/ui.service';
import { ImageStorageService } from '../../services/image-storage.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-registration',
    imports: [FormsModule],
    templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
  
  // --- Step 1 Data Model ---
  formData = {
    email: '',
    password: '',
    fullName: '',
    gender: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    countryCode: '+880',
    mobile: ''
  };

  // --- Step 2 Data Model (Previews & Files) ---
  previews: { [key: string]: string | ArrayBuffer | null } = { 
    primary: null, 
    secondary1: null, 
    secondary2: null 
  };
  
  selectedFiles: { [key: string]: File | null } = { 
    primary: null, 
    secondary1: null, 
    secondary2: null 
  };

  days = Array.from({ length: 31 }, (_, i) => i + 1);
  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  years = Array.from({ length: 60 }, (_, i) => new Date().getFullYear() - 18 - i);

  constructor(
    public regService: RegistrationService,
    public uiService: UiService,
    private imageStorage: ImageStorageService,
    private authService: AuthService // Correctly injected
  ) {}

  // 1. Update ngOnInit to be empty (or removed) since we aren't loading local drafts anymore
ngOnInit() {
  // We are starting fresh with Firebase, so we don't need to 'restore' local data here.
}

  // --- Simplified Step 1 Logic ---
// 2. Update onSaveNext to pass the UID to the service
async onSaveNext() {
  if (!this.formData.email || !this.formData.password) {
    alert("Please enter email and password.");
    return;
  }

  try {
    const result = await this.authService.signUp(
      this.formData.email, 
      this.formData.password, 
      this.formData
    );

    if (result.success && result.uid) {
      // Tell the registration service who the active user is
      this.regService.setRegistrationId(result.uid);
      
      // Move to Step 2
      this.regService.currentStep.set(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
      console.log("Cloud registration successful for UID:", result.uid);
    } else {
      alert("Registration failed: " + result.message);
    }
  } catch (err) {
    console.error("Signup error:", err);
  }
}

  // ===============================
  // STEP 2 LOGIC (Photo Upload)
  // ===============================
  onFileSelected(event: Event, key: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.selectedFiles[key] = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.previews[key] = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  isStep2Valid(): boolean {
    return !!(this.selectedFiles['primary'] && 
              this.selectedFiles['secondary1'] && 
              this.selectedFiles['secondary2']);
  }

  async onSaveStep2() {
    // Now regService.registrationId() will return the Firebase UID 
    // because we just created the user in Step 1
    const uid = this.regService.registrationId();
    if (!uid) {
      alert("Session expired. Please restart registration.");
      return;
    }

    try {
      await this.imageStorage.savePhoto(uid, 'primary', this.selectedFiles['primary']!);
      await this.imageStorage.savePhoto(uid, 'secondary1', this.selectedFiles['secondary1']!);
      await this.imageStorage.savePhoto(uid, 'secondary2', this.selectedFiles['secondary2']!);

      this.regService.saveStep2Data({
        hasPhotos: true,
        photoTimestamp: new Date().toISOString()
      });

      this.regService.currentStep.set(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
    } catch (error) {
      console.error('Failed to save photos:', error);
      alert('Error saving photos. Please try again.');
    }
  }

  resetStep2() {
    this.previews = { primary: null, secondary1: null, secondary2: null };
    this.selectedFiles = { primary: null, secondary1: null, secondary2: null };
    const inputs = document.querySelectorAll('input[type="file"]') as NodeListOf<HTMLInputElement>;
    inputs.forEach(input => input.value = '');
  }
}