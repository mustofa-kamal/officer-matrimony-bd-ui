import { Injectable, signal, computed } from '@angular/core';
import { OfficerLinkProfile } from '../models/profile.model';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  
  /**
     * 1. SOURCE SIGNALS (The State)
     * Think of these as the "raw inputs". When these change, anything 
     * connected to them (computed signals) will also change.
     */
    private rawProfiles = signal<OfficerLinkProfile[]>([]); // All profiles from DB
    private filterCriteria = signal<any>({});              // Sidebar filter values
    private activeCategory = signal<string | null>(null);   // Selected profession group
    private activeSubCategory = signal<string | null>(null);// Selected specific job

    // A signal to track which single profile is being looked at
    selectedProfile = signal<OfficerLinkProfile | null>(null);

  // Automatically keeps the count accurate based on the filtered list above
  profileCount = computed(() => this.displayProfiles().length);

  constructor() {
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
          "details": { "institution_name": "Sonali Bank PLC", "designation": "Senior Officer" },
          "monthly_income_range": "50k - 70k BDT"
        },
        "educationMedium": "Bangla",
        "postedDate": "2026-04-06T15:00:00Z"
      }
    ];

    // 4. Map and sort into the rawProfiles signal
    const mappedData = rawData.map(p => ({
      ...p,
      postedDate: new Date(p.postedDate)
    } as OfficerLinkProfile)).sort((a, b) => 
      (b.postedDate as Date).getTime() - (a.postedDate as Date).getTime()
    );

    this.rawProfiles.set(mappedData);
    
    // Initialize displayProfiles with the data from rawProfiles signal
   
  }

  /**
   * 4. ACTIONS (Methods)
   * These are the only places where we manually .set() or .update() signals.
   */
    applyFilters(criteria: any) {
    if (criteria.category) {
      this.activeCategory.set(criteria.category);
      this.activeSubCategory.set(null);
    } else if (criteria.sub_category) {
      this.activeSubCategory.set(criteria.sub_category);
      this.activeCategory.set(null);
    }
    this.filterCriteria.set(criteria);
  }

  resetProfiles() {
    this.activeSubCategory.set(null);
   
  }

  viewProfile(profile: OfficerLinkProfile) {
    this.selectedProfile.set(profile);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  clearSelection() {
    this.selectedProfile.set(null);
  }

  /**
   * 3. AGGREGATION (Summaries)
   * These create the lists of professions (with counts) seen on your Landing Page.
   */
categorySummary = computed(() => {
  const counts: { [key: string]: number } = {};
  this.rawProfiles().forEach(p => {
    const val = p.profession.category;
    counts[val] = (counts[val] || 0) + 1;
  });
  return Object.entries(counts)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, count]) => ({ name, count }));
});

// 2. Summary for Sub-Categories (e.g., BCS, Teaching, Self-Employed)
subCategorySummary = computed(() => {
  const counts: { [key: string]: number } = {};
  this.rawProfiles().forEach(p => {
    const val = p.profession.sub_category;
    counts[val] = (counts[val] || 0) + 1;
  });
  return Object.entries(counts)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, count]) => ({ name, count }));
});

  /**
   * 2. DERIVED STATE (Computed Signals)
   * These are READ-ONLY. You cannot .set() them. 
   * They automatically re-calculate ONLY when their source signals change.
   */
  displayProfiles = computed(() => {
    const raw = this.rawProfiles();
    const criteria = this.filterCriteria();
    const currentCat = this.activeCategory();
    const currentSub = this.activeSubCategory();

    return raw.filter(profile => {
      // Logic from your old applyFilters moves here
      const matchContext = (!currentCat || profile.profession?.category === currentCat) &&
                          (!currentSub || profile.profession?.sub_category === currentSub);

      const matchGender = !criteria.gender || profile.personal_info?.gender === criteria.gender;
      const matchStatus = !criteria.status || profile.personal_info?.marital_status === criteria.status;
      
      const age = profile.personal_info?.age ?? 0;
      const matchAge = age >= (criteria.ageStart ?? 18) && age <= (criteria.ageEnd ?? 80);

      return matchContext && matchGender && matchStatus && matchAge;
    });
  });


}