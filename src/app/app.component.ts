import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { FilterService } from './services/filter.service'; // 1. Import it
import { CommonModule } from '@angular/common'; // <--- MUST HAVE THIS
import { RegistrationComponent } from './features/registration/registration.component';

// 1. You must import these two
import { UiService } from './services/ui.service'; 
import { ProfileService } from './services/profile.service'; 



@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        HeaderComponent,
        FilterBarComponent,
        CommonModule,
        RegistrationComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'officer-matrimony-bd-ui';

  // 2. You must inject them as PUBLIC
  public uiService = inject(UiService);
  public profileService = inject(ProfileService); 
  public filterService = inject(FilterService); // 2. Inject it here

  // Inside app.component.ts
districts = [
  "Bagerhat", "Bandarban", "Barguna", "Barishal", "Bhola", "Bogra", "Brahmanbaria", "Chandpur", "Chapainawabganj", "Chattogram", "Chuadanga", "Comilla", "Cox's Bazar", "Dhaka", "Dinajpur", "Faridpur", "Feni", "Gaibandha", "Gazipur", "Gopalganj", "Habiganj", "Jamalpur", "Jashore", "Jhalokati", "Jhenaidah", "Joypurhat", "Khagrachari", "Khulna", "Kishoreganj", "Kurigram", "Kushtia", "Lakshmipur", "Lalmonirhat", "Madaripur", "Magura", "Manikganj", "Meherpur", "Moulvibazar", "Munshiganj", "Mymensingh", "Naogaon", "Narail", "Narayanganj", "Narsingdi", "Natore", "Netrokona", "Nilphamari", "Noakhali", "Pabna", "Panchagarh", "Patuakhali", "Pirojpur", "Rajbari", "Rajshahi", "Rangamati", "Rangpur", "Satkhira", "Shariatpur", "Sherpur", "Sirajganj", "Sunamganj", "Sylhet", "Tangail", "Thakurgaon"
].sort();

ages = Array.from({ length: 63 }, (_, i) => i + 18); // 18 to 80

// src/app/app.component.ts

// Initialize with 'profession' so it renders on page load
activeQuickFilter = signal<string | null>('profession'); 

onQuickFilter(category: string) {
  // If clicking the already active one, we keep it active (or null if you prefer toggling)
  this.activeQuickFilter.set(category);
}

// src/app/app.component.ts

// When a user clicks a broad sector like "Public Sector"
onCategoryClick(categoryName: string) {
  this.profileService.applyFilters({ category: categoryName });
  
}

// When a user clicks a specific designation like "BCS" or "Academia"
onSubCategoryClick(subCategoryName: string) {
  this.profileService.applyFilters({ sub_category: subCategoryName });
  
}



}