export interface OfficerLinkProfile {
  id: number;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  location: string; // Work Location
  homeDistrict: string; // Home District
  imageUrl: string;
  isOnline: boolean;
  isFavorite: boolean;
  postedDate: Date;
  serviceBranch: 'Army' | 'Navy' | 'Air Force';
  rank: string;
  educationMedium: string;
  institution: string;
  maritalStatus: string;
  religion: string;
  officerLink: string;
  height: string;
  aboutMe: string;
}