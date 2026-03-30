export interface OfficerLinkProfile {
  id: number;
  name: string;
  age: number;
  location: string;
  imageUrl: string;
  isOnline: boolean;
  isFavorite: boolean;
  postedDate: Date;
  
  // Filterable Data
  gender: 'Male' | 'Female';
  serviceBranch: 'Army' | 'Navy' | 'Air Force';
  officerLink: 'Self' | 'Parent' | 'GrandParent';
  maritalStatus: 'Single' | 'Married' | 'Divorced' | 'Separated' | 'Widow' | 'Widower';
  religion: 'Muslim' | 'Hindu' | 'Christian' | 'Buddha';
}