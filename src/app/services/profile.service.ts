import { Injectable, signal } from '@angular/core';
import { OfficerLinkProfile } from '../models/profile.model';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  
  private rawProfiles: OfficerLinkProfile[] = [
    { id: 1, name: 'Tanha', age: 19, location: 'Sherpur', imageUrl: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400', isOnline: true, isFavorite: false, postedDate: new Date('2026-03-29'), gender: 'Female', serviceBranch: 'Army', officerLink: 'Parent', maritalStatus: 'Single', religion: 'Muslim' },
    { id: 2, name: 'Salma', age: 24, location: 'Barishal', imageUrl: 'https://images.unsplash.com/photo-1619194617062-5a61b9c6a049?auto=format&fit=crop&q=80&w=400', isOnline: true, isFavorite: false, postedDate: new Date('2026-03-28'), gender: 'Female', serviceBranch: 'Navy', officerLink: 'Self', maritalStatus: 'Single', religion: 'Muslim' },
    { id: 3, name: 'Humayra', age: 22, location: 'Bogura', imageUrl: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?auto=format&fit=crop&q=80&w=400', isOnline: false, isFavorite: true, postedDate: new Date('2026-03-27'), gender: 'Female', serviceBranch: 'Air Force', officerLink: 'GrandParent', maritalStatus: 'Single', religion: 'Muslim' },
    { id: 4, name: 'Kamal', age: 28, location: 'Dhaka', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400', isOnline: true, isFavorite: false, postedDate: new Date('2026-03-26'), gender: 'Male', serviceBranch: 'Army', officerLink: 'Self', maritalStatus: 'Single', religion: 'Muslim' },
    { id: 5, name: 'Nafisa', age: 21, location: 'Sylhet', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400', isOnline: true, isFavorite: false, postedDate: new Date('2026-03-25'), gender: 'Female', serviceBranch: 'Army', officerLink: 'Parent', maritalStatus: 'Single', religion: 'Muslim' },
    { id: 6, name: 'Anika', age: 23, location: 'Cumilla', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400', isOnline: true, isFavorite: true, postedDate: new Date('2026-03-24'), gender: 'Female', serviceBranch: 'Navy', officerLink: 'Parent', maritalStatus: 'Single', religion: 'Muslim' },
    { id: 7, name: 'Zayan', age: 26, location: 'Chittagong', imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400', isOnline: false, isFavorite: false, postedDate: new Date('2026-03-23'), gender: 'Male', serviceBranch: 'Navy', officerLink: 'Self', maritalStatus: 'Single', religion: 'Muslim' },
    { id: 8, name: 'Raisa', age: 20, location: 'Rajshahi', imageUrl: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400', isOnline: true, isFavorite: false, postedDate: new Date('2026-03-22'), gender: 'Female', serviceBranch: 'Air Force', officerLink: 'GrandParent', maritalStatus: 'Single', religion: 'Muslim' },
    { id: 9, name: 'Fariha', age: 25, location: 'Khulna', imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400', isOnline: true, isFavorite: false, postedDate: new Date('2026-03-21'), gender: 'Female', serviceBranch: 'Army', officerLink: 'Self', maritalStatus: 'Single', religion: 'Muslim' },
    { id: 10, name: 'Tahmid', age: 29, location: 'Mymensingh', imageUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400', isOnline: true, isFavorite: true, postedDate: new Date('2026-03-20'), gender: 'Male', serviceBranch: 'Air Force', officerLink: 'Self', maritalStatus: 'Single', religion: 'Muslim' },
    { id: 11, name: 'Sumi', age: 22, location: 'Rangpur', imageUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=400', isOnline: false, isFavorite: false, postedDate: new Date('2026-03-19'), gender: 'Female', serviceBranch: 'Army', officerLink: 'Parent', maritalStatus: 'Single', religion: 'Muslim' },
    { id: 12, name: 'Ishat', age: 24, location: 'Jessore', imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400', isOnline: true, isFavorite: false, postedDate: new Date('2026-03-18'), gender: 'Female', serviceBranch: 'Navy', officerLink: 'GrandParent', maritalStatus: 'Single', religion: 'Muslim' },
    { id: 13, name: 'Rohan', age: 27, location: 'Gazipur', imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400', isOnline: true, isFavorite: false, postedDate: new Date('2026-03-17'), gender: 'Male', serviceBranch: 'Army', officerLink: 'Self', maritalStatus: 'Single', religion: 'Muslim' },
    { id: 14, name: 'Lopa', age: 19, location: 'Pabna', imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400', isOnline: true, isFavorite: true, postedDate: new Date('2026-03-16'), gender: 'Female', serviceBranch: 'Air Force', officerLink: 'Parent', maritalStatus: 'Single', religion: 'Muslim' },
    { id: 15, name: 'Sania', age: 23, location: 'Dinajpur', imageUrl: 'https://images.unsplash.com/photo-1598550874175-4d0fe4a2c90b?auto=format&fit=crop&q=80&w=400', isOnline: false, isFavorite: false, postedDate: new Date('2026-03-15'), gender: 'Female', serviceBranch: 'Navy', officerLink: 'Self', maritalStatus: 'Single', religion: 'Muslim' },
    { id: 16, name: 'Fahim', age: 30, location: 'Narsingdi', imageUrl: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=400', isOnline: true, isFavorite: false, postedDate: new Date('2026-03-14'), gender: 'Male', serviceBranch: 'Air Force', officerLink: 'Self', maritalStatus: 'Single', religion: 'Muslim' },
    { id: 17, name: 'Maya', age: 21, location: 'Tirupur', imageUrl: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=400', isOnline: true, isFavorite: false, postedDate: new Date('2026-03-13'), gender: 'Female', serviceBranch: 'Army', officerLink: 'Parent', maritalStatus: 'Single', religion: 'Muslim' },
    { id: 18, name: 'Sadia', age: 25, location: 'Brahmanbaria', imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400', isOnline: true, isFavorite: true, postedDate: new Date('2026-03-12'), gender: 'Female', serviceBranch: 'Navy', officerLink: 'GrandParent', maritalStatus: 'Single', religion: 'Muslim' },
    { id: 19, name: 'Arman', age: 28, location: 'Kishoreganj', imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400', isOnline: false, isFavorite: false, postedDate: new Date('2026-03-11'), gender: 'Male', serviceBranch: 'Army', officerLink: 'Self', maritalStatus: 'Single', religion: 'Muslim' },
    { id: 20, name: 'Jeba', age: 20, location: 'Habiganj', imageUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2a04?auto=format&fit=crop&q=80&w=400', isOnline: true, isFavorite: false, postedDate: new Date('2026-03-10'), gender: 'Female', serviceBranch: 'Air Force', officerLink: 'Parent', maritalStatus: 'Single', religion: 'Muslim' }
  ].sort((a, b) => b.postedDate.getTime() - a.postedDate.getTime()) as OfficerLinkProfile[];

  displayProfiles = signal<OfficerLinkProfile[]>(this.rawProfiles);

  applyFilters(criteria: any) {
    const filtered = this.rawProfiles.filter(profile => {
      return (
        (!criteria.gender || profile.gender === criteria.gender) &&
        (!criteria.arms || profile.serviceBranch === criteria.arms) &&
        (!criteria.link || profile.officerLink === criteria.link) &&
        (!criteria.status || profile.maritalStatus === criteria.status) &&
        (!criteria.religion || profile.religion === criteria.religion) &&
        (profile.age >= criteria.ageStart && profile.age <= criteria.ageEnd)
      );
    });
    this.displayProfiles.set(filtered);
  }

  resetProfiles() {
    this.displayProfiles.set(this.rawProfiles);
  }
}