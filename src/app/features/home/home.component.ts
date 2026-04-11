import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiService } from '../../services/ui.service';
import { ProfileService } from '../../services/profile.service';
import { FilterService } from '../../services/filter.service';
import { RegistrationComponent } from '../registration/registration.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FilterBarComponent } from '../../components/filter-bar/filter-bar.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RegistrationComponent, 
    HeaderComponent, 
    FilterBarComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // 1. Inject the REAL services
  public uiService = inject(UiService);
  public profileService = inject(ProfileService);
  public filterService = inject(FilterService);
  private router = inject(Router);

  // 2. Add your REAL data arrays
  districts = [
    "Bagerhat", "Bandarban", "Barguna", "Barishal", "Bhola", "Bogra", "Brahmanbaria", "Chandpur", "Chapainawabganj", "Chattogram", "Chuadanga", "Comilla", "Cox's Bazar", "Dhaka", "Dinajpur", "Faridpur", "Feni", "Gaibandha", "Gazipur", "Gopalganj", "Habiganj", "Jamalpur", "Jashore", "Jhalokati", "Jhenaidah", "Joypurhat", "Khagrachari", "Khulna", "Kishoreganj", "Kurigram", "Kushtia", "Lakshmipur", "Lalmonirhat", "Madaripur", "Magura", "Manikganj", "Meherpur", "Moulvibazar", "Munshiganj", "Mymensingh", "Naogaon", "Narail", "Narayanganj", "Narsingdi", "Natore", "Netrokona", "Nilphamari", "Noakhali", "Pabna", "Panchagarh", "Patuakhali", "Pirojpur", "Rajbari", "Rajshahi", "Rangamati", "Rangpur", "Satkhira", "Shariatpur", "Sherpur", "Sirajganj", "Sunamganj", "Sylhet", "Tangail", "Thakurgaon"
  ].sort();

  ages = Array.from({ length: 63 }, (_, i) => i + 18);

  // 3. Add your Logic methods
  activeQuickFilter = signal<string | null>('profession'); 
  

  onQuickFilter(category: string) {
    this.activeQuickFilter.set(category);
  }

  // src/app/features/home/home.component.ts

onCategoryClick(categoryName: string) {
  // 1. Set the filter
  this.profileService.applyFilters({ category: categoryName });
  
  // 2. Navigate to the profiles page (The Router handles the rest!)
  this.router.navigate(['/profiles']);
}

onSubCategoryClick(subCategoryName: string) {
  // 1. Set the filter
  this.profileService.applyFilters({ sub_category: subCategoryName });
  
  // 2. Navigate to the profiles page
  this.router.navigate(['/profiles']);
}
}