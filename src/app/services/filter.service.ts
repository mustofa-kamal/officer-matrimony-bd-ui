import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FilterService {
  // Existing signals...
  selectedGender = signal<string>('');
  selectedArms = signal<string>('');
  selectedLinks = signal<string>('');
  selectedStatus = signal<string>('');
  
  // New Religion Signal
  selectedReligion = signal<string>(''); 

  ageStart = signal<number>(18);
  ageEnd = signal<number>(35);
  ageOptions = Array.from({ length: 83 }, (_, i) => i + 18);

  resetAll() {
    this.selectedGender.set('');
    this.selectedArms.set('');
    this.selectedLinks.set('');
    this.selectedStatus.set('');
    this.selectedReligion.set(''); // Reset Religion
    this.ageStart.set(18);
    this.ageEnd.set(35);
  }

  executeSearch() {
    console.log('Searching with Religion:', this.selectedReligion());
    // Backend call logic...
  }
}