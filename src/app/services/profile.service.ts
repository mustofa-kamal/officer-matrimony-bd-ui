import { Injectable, signal, computed } from '@angular/core';
import { OfficerLinkProfile } from '../models/profile.model';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  
  // 1. DECLARE SIGNALS AT THE TOP
  // This signal holds the list currently shown in the grid
  displayProfiles = signal<OfficerLinkProfile[]>([]);
  
  // This signal holds the profile for the Detail Page
  selectedProfile = signal<OfficerLinkProfile | null>(null);

  // 2. COMPUTED PROPERTIES
  profileCount = computed(() => this.displayProfiles().length);

  // 3. RAW DATA
  private rawProfiles: OfficerLinkProfile[] = [
  { 
    id: 7, name: 'Zayan Ahmed', age: 26, gender: 'Male', location: 'Dhaka Cant.', homeDistrict: 'Chittagong',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400', 
    isOnline: true, isFavorite: false, postedDate: new Date('2026-03-31'), serviceBranch: 'Army', 
    rank: 'Army Captain', educationMedium: 'English Version', institution: 'BUET', maritalStatus: 'Single', 
    religion: 'Muslim', officerLink: 'Self', height: "5' 10\"",
    aboutMe: 'A dedicated Army officer currently serving in Dhaka. Passionate about technology and fitness.'
  },
  { 
    id: 1, name: 'Tanha Karim', age: 23, gender: 'Female', location: 'Savar Cant.', homeDistrict: 'Sherpur',
    imageUrl: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400', 
    isOnline: true, isFavorite: true, postedDate: new Date('2026-03-30'), serviceBranch: 'Army', 
    rank: 'Lieutenant', educationMedium: 'Bangla Medium', institution: 'BUP', maritalStatus: 'Single', 
    religion: 'Muslim', officerLink: 'Parent', height: "5' 4\"",
    aboutMe: 'Serving in the Medical Corps. I enjoy reading and travelling. Looking for an officer family background.'
  },
  { 
    id: 2, name: 'Salma Jahan', age: 24, gender: 'Female', location: 'Chattogram Base', homeDistrict: 'Barishal',
    imageUrl: 'https://images.unsplash.com/photo-1619194617062-5a61b9c6a049?auto=format&fit=crop&q=80&w=400', 
    isOnline: true, isFavorite: false, postedDate: new Date('2026-03-29'), serviceBranch: 'Navy', 
    rank: 'Sub-Lieutenant', educationMedium: 'English Medium', institution: 'NSU', maritalStatus: 'Single', 
    religion: 'Muslim', officerLink: 'Self', height: "5' 5\"",
    aboutMe: 'Navy officer with a love for the ocean and classical music. Seeking a compatible life partner.'
  },
  { 
    id: 4, name: 'Kamal Hossain', age: 28, gender: 'Male', location: 'Mirpur Cant.', homeDistrict: 'Dhaka',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400', 
    isOnline: false, isFavorite: false, postedDate: new Date('2026-03-28'), serviceBranch: 'Army', 
    rank: 'Major', educationMedium: 'English Version', institution: 'MIST', maritalStatus: 'Single', 
    religion: 'Muslim', officerLink: 'Self', height: "5' 11\"",
    aboutMe: 'Grounded and career-focused. I value family time and honest communication.'
  },
  { 
    id: 10, name: 'Tahmid Zakaria', age: 29, gender: 'Male', location: 'Kurmitola Base', homeDistrict: 'Mymensingh',
    imageUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400', 
    isOnline: true, isFavorite: true, postedDate: new Date('2026-03-27'), serviceBranch: 'Air Force', 
    rank: 'Flight Lieutenant', educationMedium: 'English Version', institution: 'Baf Academy', maritalStatus: 'Single', 
    religion: 'Muslim', officerLink: 'Self', height: "5' 9\"",
    aboutMe: 'Pilot by profession, adventurer by heart. Seeking someone who understands the service life.'
  },
  { 
    id: 11, name: 'Nafisa Ali', age: 22, gender: 'Female', location: 'Jashore Cant.', homeDistrict: 'Sylhet',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400', 
    isOnline: true, isFavorite: false, postedDate: new Date('2026-03-26'), serviceBranch: 'Army', 
    rank: 'Lieutenant', educationMedium: 'Bangla Medium', institution: 'CU', maritalStatus: 'Single', 
    religion: 'Muslim', officerLink: 'GrandParent', height: "5' 3\"",
    aboutMe: 'Artillery officer. I enjoy painting and gardening. Looking for a supportive partner.'
  },
  { 
    id: 12, name: 'Arifur Rahman', age: 27, gender: 'Male', location: 'Khulna Base', homeDistrict: 'Bogura',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400', 
    isOnline: true, isFavorite: false, postedDate: new Date('2026-03-25'), serviceBranch: 'Navy', 
    rank: 'Lieutenant', educationMedium: 'English Version', institution: 'Military Academy', maritalStatus: 'Single', 
    religion: 'Muslim', officerLink: 'Self', height: "5' 8\"",
    aboutMe: 'Engineer officer in Navy. Hardworking and loves sports. Seeking someone from a cultured family.'
  },
  { 
    id: 13, name: 'Anika Tabassum', age: 25, gender: 'Female', location: 'Dhaka Cant.', homeDistrict: 'Cumilla',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400', 
    isOnline: false, isFavorite: true, postedDate: new Date('2026-03-24'), serviceBranch: 'Air Force', 
    rank: 'Flying Officer', educationMedium: 'English Medium', institution: 'IUB', maritalStatus: 'Single', 
    religion: 'Muslim', officerLink: 'Parent', height: "5' 6\"",
    aboutMe: 'Air Force Logistics. Optimistic and family-oriented. Looking for a soulmate.'
  },
  { 
    id: 14, name: 'Sajid Islam', age: 30, gender: 'Male', location: 'Bogura Cant.', homeDistrict: 'Rajshahi',
    imageUrl: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=400', 
    isOnline: true, isFavorite: false, postedDate: new Date('2026-03-23'), serviceBranch: 'Army', 
    rank: 'Major', educationMedium: 'Bangla Medium', institution: 'BMA', maritalStatus: 'Single', 
    religion: 'Muslim', officerLink: 'Self', height: "6' 0\"",
    aboutMe: 'Infantry officer. Values discipline and loyalty. Seeking a partner with similar outlook.'
  },
  { 
    id: 15, name: 'Ishrat Jahan', age: 21, gender: 'Female', location: 'Sreepur Base', homeDistrict: 'Gazipur',
    imageUrl: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?auto=format&fit=crop&q=80&w=400', 
    isOnline: true, isFavorite: false, postedDate: new Date('2026-03-22'), serviceBranch: 'Navy', 
    rank: 'Sub-Lieutenant', educationMedium: 'English Version', institution: 'DU', maritalStatus: 'Single', 
    religion: 'Muslim', officerLink: 'Parent', height: "5' 2\"",
    aboutMe: 'Education branch. I love teaching and volunteering. Seeking an educated partner.'
  },
  { 
    id: 16, name: 'Rohan Chowdhury', age: 28, gender: 'Male', location: 'Chittagong Base', homeDistrict: 'Noakhali',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400', 
    isOnline: true, isFavorite: false, postedDate: new Date('2026-03-21'), serviceBranch: 'Navy', 
    rank: 'Lieutenant Commander', educationMedium: 'English Medium', institution: 'Brac University', maritalStatus: 'Single', 
    religion: 'Muslim', officerLink: 'Self', height: "5' 10\"",
    aboutMe: 'Naval aviator. Passionate about flying and photography. Looking for an independent partner.'
  },
  { 
    id: 17, name: 'Fariha Nasrin', age: 24, gender: 'Female', location: 'Dhaka Cant.', homeDistrict: 'Khulna',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400', 
    isOnline: true, isFavorite: true, postedDate: new Date('2026-03-20'), serviceBranch: 'Army', 
    rank: 'Captain', educationMedium: 'Bangla Medium', institution: 'AMC', maritalStatus: 'Single', 
    religion: 'Muslim', officerLink: 'Self', height: "5' 5\"",
    aboutMe: 'Doctor in Army Medical Corps. Loves helping people. Seeking a caring life partner.'
  },
  { 
    id: 18, name: 'Adnan Sami', age: 29, gender: 'Male', location: 'Zahurul Haque Base', homeDistrict: 'Rangpur',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400', 
    isOnline: false, isFavorite: false, postedDate: new Date('2026-03-19'), serviceBranch: 'Air Force', 
    rank: 'Squadron Leader', educationMedium: 'English Version', institution: 'Baf Academy', maritalStatus: 'Single', 
    religion: 'Muslim', officerLink: 'Self', height: "5' 9\"",
    aboutMe: 'Air Force Engineer. Loves tech gadgets and hiking. Looking for a compatible partner.'
  },
  { 
    id: 19, name: 'Lopa Rahman', age: 20, gender: 'Female', location: 'Cumilla Cant.', homeDistrict: 'Pabna',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400', 
    isOnline: true, isFavorite: false, postedDate: new Date('2026-03-18'), serviceBranch: 'Army', 
    rank: 'Lieutenant', educationMedium: 'Bangla Medium', institution: 'RU', maritalStatus: 'Single', 
    religion: 'Muslim', officerLink: 'Parent', height: "5' 4\"",
    aboutMe: 'Signals officer. Tech savvy and loves coding. Seeking a modern yet traditional partner.'
  },
  { 
    id: 20, name: 'Shakir Ahmed', age: 31, gender: 'Male', location: 'Dhaka Cant.', homeDistrict: 'Tangail',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400', 
    isOnline: true, isFavorite: false, postedDate: new Date('2026-03-17'), serviceBranch: 'Army', 
    rank: 'Major', educationMedium: 'English Version', institution: 'BMA', maritalStatus: 'Married', 
    religion: 'Muslim', officerLink: 'Self', height: "5' 11\"",
    aboutMe: 'Army officer seeking a second chance at life. Family oriented and professional.'
  },
  { 
    id: 21, name: 'Nadia Islam', age: 23, gender: 'Female', location: 'Chattogram Base', homeDistrict: 'Dinajpur',
    imageUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400', 
    isOnline: true, isFavorite: true, postedDate: new Date('2026-03-16'), serviceBranch: 'Navy', 
    rank: 'Sub-Lieutenant', educationMedium: 'English Medium', institution: 'AIUB', maritalStatus: 'Single', 
    religion: 'Muslim', officerLink: 'Parent', height: "5' 3\"",
    aboutMe: 'Navy logistics. Hardworking and cheerful. Seeking someone to share life adventures.'
  },
  { 
    id: 22, name: 'Fahim Shahriar', age: 26, gender: 'Male', location: 'Matiur Rahman Base', homeDistrict: 'Jessore',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400', 
    isOnline: true, isFavorite: false, postedDate: new Date('2026-03-15'), serviceBranch: 'Air Force', 
    rank: 'Flying Officer', educationMedium: 'Bangla Medium', institution: 'KUET', maritalStatus: 'Single', 
    religion: 'Muslim', officerLink: 'Self', height: "5' 8\"",
    aboutMe: 'Baf IT branch. Loves gaming and movies. Seeking a partner who is also a best friend.'
  },
  { 
    id: 23, name: 'Maya Akter', age: 22, gender: 'Female', location: 'Dhaka Cant.', homeDistrict: 'Feni',
    imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=400', 
    isOnline: false, isFavorite: false, postedDate: new Date('2026-03-14'), serviceBranch: 'Army', 
    rank: 'Lieutenant', educationMedium: 'English Version', institution: 'BUP', maritalStatus: 'Single', 
    religion: 'Muslim', officerLink: 'GrandParent', height: "5' 5\"",
    aboutMe: 'Supply corps. Loves cooking and family gatherings. Seeking a respectful partner.'
  },
  { 
    id: 24, name: 'Imran Khan', age: 32, gender: 'Male', location: 'Ghatail Cant.', homeDistrict: 'Kishoreganj',
    imageUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400', 
    isOnline: true, isFavorite: false, postedDate: new Date('2026-03-13'), serviceBranch: 'Army', 
    rank: 'Major', educationMedium: 'Bangla Medium', institution: 'Military Academy', maritalStatus: 'Divorced', 
    religion: 'Muslim', officerLink: 'Self', height: "5' 10\"",
    aboutMe: 'Resilient and mature. Looking for a partner to build a meaningful future together.'
  },
  { 
    id: 25, name: 'Sania Mirza', age: 25, gender: 'Female', location: 'Dhaka Cant.', homeDistrict: 'Habiganj',
    imageUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2a04?auto=format&fit=crop&q=80&w=400', 
    isOnline: true, isFavorite: true, postedDate: new Date('2026-03-12'), serviceBranch: 'Army', 
    rank: 'Captain', educationMedium: 'English Medium', institution: 'IUT', maritalStatus: 'Single', 
    religion: 'Muslim', officerLink: 'Self', height: "5' 6\"",
    aboutMe: 'Ordnance officer. Loves sports and travel. Seeking an understanding and educated partner.'
  }
].sort((a, b) => b.postedDate.getTime() - a.postedDate.getTime()) as OfficerLinkProfile[];

  // 4. CONSTRUCTOR
  constructor() {
    // Initialize the grid with all profiles when service starts
    this.displayProfiles.set(this.rawProfiles);
  }

  // 5. METHODS
  applyFilters(criteria: any) {
    const filtered = this.rawProfiles.filter(profile => {
      const matchGender = !criteria.gender || profile.gender === criteria.gender;
      const matchArms = !criteria.arms || profile.serviceBranch === criteria.arms;
      const matchLink = !criteria.link || profile.officerLink === criteria.link;
      const matchStatus = !criteria.status || profile.maritalStatus === criteria.status;
      const matchReligion = !criteria.religion || profile.religion === criteria.religion;
      const matchEducation = !criteria.education || profile.educationMedium === criteria.education;
      
      // Handle Age Range (Ensure criteria has defaults if null)
      const start = criteria.ageStart ?? 18;
      const end = criteria.ageEnd ?? 50;
      const matchAge = profile.age >= start && profile.age <= end;

      return matchGender && matchArms && matchLink && matchStatus && matchReligion && matchEducation && matchAge;
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
}