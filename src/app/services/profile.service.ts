import { Injectable, signal, computed } from '@angular/core';
import { OfficerLinkProfile } from '../models/profile.model';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  
  displayProfiles = signal<OfficerLinkProfile[]>([]);
  selectedProfile = signal<OfficerLinkProfile | null>(null);
  profileCount = computed(() => this.displayProfiles().length);

  private rawProfiles: OfficerLinkProfile[] = [];

  constructor() {
    // 1. RAW DATA (Updated to match your new schema requirements)
    const rawData = [
  {
    "id": "USER_01_BCS_ADMIN",
    "isOnline": true,
    "personal_info": { 
      "full_name": "Mustafizur Rahman", 
      "gender": "Male", 
      "date_of_birth": "1994-05-12", 
      "marital_status": "Never Married",
      "age": 32,
      "homeDistrict": "Dhaka",
      "height": "5'10\"",
      "weight": "75kg",
      "religion": "Islam"
    },
    "images": { "primary": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400", "gallery": [] },
    "profession": {
      "category": "Public Sector",
      "sub_category": "BCS",
      "details": { "institution_name": "Dhaka University", "designation": "Assistant Commissioner" },
      "monthly_income_range": "60k - 80k BDT"
    },
    "educationMedium": "English",
    "postedDate": "2026-03-01T10:00:00Z"
  },
  {
    "id": "USER_02_BIZ_TECH",
    "isOnline": false,
    "personal_info": { 
      "full_name": "Tanvir Ahmed", 
      "gender": "Male", 
      "date_of_birth": "1991-11-20", 
      "marital_status": "Never Married",
      "age": 34,
      "homeDistrict": "Barisal",
      "height": "5'8\"",
      "weight": "68kg",
      "religion": "Islam"
    },
    "images": { "primary": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400", "gallery": ["https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"] },
    "profession": {
      "category": "Business",
      "sub_category": "Self-Employed",
      "details": { "institution_name": "Apex Solutions Ltd.", "designation": "CEO / Founder" },
      "monthly_income_range": "200k+ BDT"
    },
    "educationMedium": "English",
    "postedDate": "2026-03-18T16:00:00Z"
  },
  {
    "id": "USER_09_BIZ_BOUTIQUE",
    "isOnline": true,
    "personal_info": { 
      "full_name": "Sultana Razia", 
      "gender": "Female", 
      "date_of_birth": "1997-08-14", 
      "marital_status": "Never Married",
      "age": 28,
      "homeDistrict": "Mymensingh",
      "height": "5'3\"",
      "weight": "54kg",
      "religion": "Islam"
    },
    "images": { "primary": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400", "gallery": [] },
    "profession": {
      "category": "Business",
      "sub_category": "Self-Employed",
      "details": { "institution_name": "Elegance Boutique", "designation": "Managing Director" },
      "monthly_income_range": "100k - 150k BDT"
    },
    "educationMedium": "Bangla",
    "postedDate": "2026-04-05T11:00:00Z"
  },
  {
    "id": "USER_03_BUET_STUDENT",
    "isOnline": false,
    "personal_info": { 
      "full_name": "Fahim Shahriar", 
      "gender": "Male", 
      "date_of_birth": "2002-09-15", 
      "marital_status": "Never Married",
      "age": 24,
      "homeDistrict": "Sylhet",
      "height": "5'11\"",
      "weight": "70kg",
      "religion": "Islam"
    },
    "images": { "primary": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400", "gallery": [] },
    "profession": {
      "category": "Student",
      "sub_category": "Graduate",
      "details": { "institution_name": "BUET", "department": "CSE" },
      "monthly_income_range": "None"
    },
    "educationMedium": "English",
    "postedDate": "2026-02-28T09:15:00Z"
  },
  {
    "id": "USER_04_SCHOOL_TEACHER",
    "isOnline": true,
    "personal_info": { 
      "full_name": "Nusrat Jahan", 
      "gender": "Female", 
      "date_of_birth": "1996-02-10", 
      "marital_status": "Never Married",
      "age": 30,
      "homeDistrict": "Chittagong",
      "height": "5'4\"",
      "weight": "58kg",
      "religion": "Islam"
    },
    "images": { "primary": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400", "gallery": [] },
    "profession": {
      "category": "Education",
      "sub_category": "Teaching",
      "details": { "institution_name": "Scholastica", "designation": "Senior Teacher" },
      "monthly_income_range": "45k - 60k BDT"
    },
    "educationMedium": "Bangla",
    "postedDate": "2026-03-05T14:30:00Z"
  },
  {
    "id": "USER_05_ACADEMIA_NSU",
    "isOnline": true,
    "personal_info": { 
      "full_name": "Abrar Hamza", 
      "gender": "Male", 
      "date_of_birth": "1994-12-02", 
      "marital_status": "Never Married",
      "age": 31,
      "homeDistrict": "Bogura",
      "height": "5'11\"",
      "weight": "72kg",
      "religion": "Islam"
    },
    "images": { "primary": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400", "gallery": [] },
    "profession": {
      "category": "Education",
      "sub_category": "Academia",
      "details": { "institution_name": "North South University (NSU)", "designation": "Lecturer" },
      "monthly_income_range": "80k - 110k BDT"
    },
    "educationMedium": "English",
    "postedDate": "2026-03-15T09:00:00Z"
  },
  {
    "id": "USER_06_BCS_POLICE",
    "isOnline": false,
    "personal_info": { 
      "full_name": "Asif Talukder", 
      "gender": "Male", 
      "date_of_birth": "1993-07-20", 
      "marital_status": "Never Married",
      "age": 32,
      "homeDistrict": "Comilla",
      "height": "5'11\"",
      "weight": "80kg",
      "religion": "Islam"
    },
    "images": { "primary": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400", "gallery": ["https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400"] },
    "profession": {
      "category": "Public Sector",
      "sub_category": "BCS",
      "details": { "institution_name": "Police Academy", "designation": "Assistant Commissioner (ASP)" },
      "monthly_income_range": "60k - 85k BDT"
    },
    "educationMedium": "English",
    "postedDate": "2026-03-10T11:20:00Z"
  },
  {
    "id": "USER_07_ACADEMIA_DU",
    "isOnline": true,
    "personal_info": { 
      "full_name": "Dr. Ariful Islam", 
      "gender": "Male", 
      "date_of_birth": "1980-05-15", 
      "marital_status": "Married",
      "age": 45,
      "homeDistrict": "Kishoreganj",
      "height": "5'7\"",
      "weight": "70kg",
      "religion": "Islam"
    },
    "images": { "primary": "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400", "gallery": [] },
    "profession": {
      "category": "Education",
      "sub_category": "Academia",
      "details": { "institution_name": "University of Dhaka (DU)", "designation": "Professor" },
      "monthly_income_range": "120k - 150k BDT"
    },
    "educationMedium": "Bangla",
    "postedDate": "2026-04-01T12:00:00Z"
  },
  {
    "id": "USER_08_BCS_FOREIGN",
    "isOnline": true,
    "personal_info": { 
      "full_name": "Mehnaz Perveen", 
      "gender": "Female", 
      "date_of_birth": "1995-03-10", 
      "marital_status": "Never Married",
      "age": 31,
      "homeDistrict": "Rajshahi",
      "height": "5'4\"",
      "weight": "55kg",
      "religion": "Islam"
    },
    "images": { "primary": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400", "gallery": [] },
    "profession": {
      "category": "Public Sector",
      "sub_category": "BCS",
      "details": { "institution_name": "Ministry of Foreign Affairs", "designation": "Assistant Secretary" },
      "monthly_income_range": "70k - 95k BDT"
    },
    "educationMedium": "English",
    "postedDate": "2026-03-12T08:45:00Z"
  },
  {
  "id": "USER_10_NON_CADRE_BANK",
  "isOnline": true,
  "personal_info": { 
    "full_name": "Sajid Hasan", 
    "gender": "Male", 
    "date_of_birth": "1992-03-25", 
    "marital_status": "Never Married",
    "age": 34,
    "homeDistrict": "Noakhali",
    "height": "5'9\"",
    "weight": "72kg",
    "religion": "Islam"
  },
  "images": { "primary": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400", "gallery": [] },
  "profession": {
    "category": "Public Sector",
    "sub_category": "Government Service (Non-Cadre)",
    "details": { 
      "institution_name": "Sonali Bank PLC", 
      "designation": "Senior Officer" 
    },
    "monthly_income_range": "50k - 70k BDT"
  },
  "educationMedium": "Bangla",
  "postedDate": "2026-04-06T15:00:00Z"
}
];

    // 2. MAPPING & SORTING
    this.rawProfiles = rawData.map(p => ({
      ...p,
      // Convert string date to actual Date object for sorting
      postedDate: new Date(p.postedDate)
    } as OfficerLinkProfile)).sort((a, b) => 
      (b.postedDate as Date).getTime() - (a.postedDate as Date).getTime()
    );

    // 3. INITIALIZE SIGNAL
    this.displayProfiles.set(this.rawProfiles);
  }

  // 4. METHODS
  applyFilters(criteria: any) {
    const filtered = this.rawProfiles.filter(profile => {
      const matchGender = !criteria.gender || profile.personal_info.gender === criteria.gender;
      const matchStatus = !criteria.status || profile.personal_info.marital_status === criteria.status;
      const matchReligion = !criteria.religion || profile.personal_info.religion === criteria.religion;
      
      const start = criteria.ageStart ?? 18;
      const end = criteria.ageEnd ?? 80;
      const matchAge = profile.personal_info.age >= start && profile.personal_info.age <= end;

      return matchGender && matchStatus && matchReligion && matchAge;
    });

    this.displayProfiles.set(filtered);
  }

  resetProfiles() {
    this.displayProfiles.set(this.rawProfiles);
  }

  viewProfile(profile: OfficerLinkProfile) {
    this.selectedProfile.set(profile);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  clearSelection() {
    this.selectedProfile.set(null);
  }

 

// Define a 'computed' signal that automatically updates whenever 'displayProfiles' changes
professionSummary = computed(() => {
  
  // 1. Create a temporary 'lookup' object (dictionary) to store counts
  // The key is the profession name (string) and the value is the total (number)
  const counts: { [key: string]: number } = {};
  
  // 2. Loop through every profile in your raw data array
  this.displayProfiles().forEach(profile => {
    
    // Grab the sub_category (e.g., 'Civil Service') from the current profile
    const subCat = profile.profession.sub_category;
    
    // Increment the count for this category:
    // If it's the first time we see it, start at 0 and add 1.
    // Otherwise, take the existing count and add 1.
    counts[subCat] = (counts[subCat] || 0) + 1;
  });

  // 3. Transform the 'lookup' object into an array that the HTML can loop through
  // Object.entries(counts) turns { 'Civil Service': 3 } into [['Civil Service', 3]]
  return Object.entries(counts).map(([name, count]) => ({ 
    name,   // This becomes the 'name' property (e.g., 'Civil Service')
    count   // This becomes the 'count' property (e.g., 3)
  }));
});

}