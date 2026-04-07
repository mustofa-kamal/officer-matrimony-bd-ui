import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';
import { UiService } from '../../services/ui.service';
import { ImageStorageService } from '../../services/image-storage.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  // --- Dropdown Arrays ---
  days = Array.from({ length: 31 }, (_, i) => i + 1);
  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  years = Array.from({ length: 60 }, (_, i) => new Date().getFullYear() - 18 - i);

  constructor(
    public regService: RegistrationService,
    public uiService: UiService,
    private imageStorage: ImageStorageService
  ) {}

  ngOnInit() {
    const saved = this.regService.getSavedData();
    if (saved) {
      // Restore Step 1 data
      this.formData = { ...this.formData, ...saved };
      
      // Restore current step position from saved progress
      if (saved.stepReached) {
        this.regService.currentStep.set(saved.stepReached);
      }
    }
  }

  // ===============================
  // STEP 1 LOGIC
  // ===============================
  onSaveNext() {
    this.regService.saveStepData(this.formData);
    this.regService.currentStep.set(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ===============================
  // STEP 2 LOGIC (Photo Upload)
  // ===============================
  onFileSelected(event: Event, key: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.selectedFiles[key] = file;

      // Generate base64 preview for the UI
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
    const uid = this.regService.registrationId();
    if (!uid) return;

    try {
      // 1. Save actual Blobs to IndexedDB
      await this.imageStorage.savePhoto(uid, 'primary', this.selectedFiles['primary']!);
      await this.imageStorage.savePhoto(uid, 'secondary1', this.selectedFiles['secondary1']!);
      await this.imageStorage.savePhoto(uid, 'secondary2', this.selectedFiles['secondary2']!);

      // 2. Update JSON progress in LocalStorage
      this.regService.saveStep2Data({
        hasPhotos: true,
        photoTimestamp: new Date().toISOString()
      });

      // 3. Move to Step 3
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
    // Reset file input elements manually if needed
    const inputs = document.querySelectorAll('input[type="file"]') as NodeListOf<HTMLInputElement>;
    inputs.forEach(input => input.value = '');
  }
}