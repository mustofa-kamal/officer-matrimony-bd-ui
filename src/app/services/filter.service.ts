import { Injectable, signal, effect, inject } from '@angular/core';
import { ProfileService } from './profile.service';

@Injectable({ providedIn: 'root' })
export class FilterService {
  private profileService = inject(ProfileService);

  // 1. All your signals
  selectedGender = signal<string>('');
  selectedArms = signal<string>('');
  selectedLinks = signal<string>('');
  selectedStatus = signal<string>('');
  selectedReligion = signal<string>('');
  selectedEducation = signal<string>('');
  ageStart = signal<number>(18);
  ageEnd = signal<number>(50);
  ageOptions = Array.from({ length: 33 }, (_, i) => i + 18);

  constructor() {
    // 2. THIS IS THE KEY: The effect must be inside the constructor
    effect(() => {
      // 3. We MUST "read" the signals by calling them as functions ()
      // This tells Angular: "Watch these specific variables!"
      const currentCriteria = {
        gender: this.selectedGender(),
        arms: this.selectedArms(),
        link: this.selectedLinks(),
        status: this.selectedStatus(),
        religion: this.selectedReligion(),
        education: this.selectedEducation(),
        ageStart: this.ageStart(),
        ageEnd: this.ageEnd()
      };

      console.log("GENDER IS NOW:", this.selectedGender());

      // 4. Send the data to the ProfileService
      this.profileService.applyFilters(currentCriteria);
    }, { allowSignalWrites: true });
  }

  resetAll() {
    this.selectedGender.set('');
    this.selectedArms.set('');
    this.selectedLinks.set('');
    this.selectedStatus.set('');
    this.selectedReligion.set('');
    this.selectedEducation.set('');
    this.ageStart.set(18);
    this.ageEnd.set(50);
  }
}