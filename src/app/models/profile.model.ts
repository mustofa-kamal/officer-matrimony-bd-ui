export interface OfficerLinkProfile {
  id: number;
  name: string;
  age: number;
  location: string;
  imageUrl: string;
  isOnline: boolean;
  isFavorite: boolean;
  postedDate: Date;
  gender: 'Male' | 'Female';
  serviceBranch: string;
  officerLink: string;
  maritalStatus: string;
  religion: string;
  // ADD THIS LINE TO FIX THE ERROR
  educationMedium: string; 
}