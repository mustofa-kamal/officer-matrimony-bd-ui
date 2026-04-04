// src/app/features/registration/registration.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
  
  // Data model for Step 1
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

  // Dropdown Arrays
  days = Array.from({ length: 31 }, (_, i) => i + 1);
  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - 18 - i);

  constructor(
    public regService: RegistrationService,
    private uiService: UiService
  ) {}

  ngOnInit() {
    // If user returns, populate form with existing data
    const saved = this.regService.getSavedData();
    if (saved) {
      this.formData = { ...this.formData, ...saved };
    }
  }

  onSaveNext() {
    // 1. Save the current step data to LocalStorage (Patching the JSON)
    this.regService.saveStepData(this.formData);

    // 2. Move to Step 2 (Photo Upload)
    this.regService.currentStep.set(2);
    
    // Smooth scroll to top for the next step
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}