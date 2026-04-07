export interface OfficerLinkProfile {
  id: string;
  personal_info: {
    full_name: string;
    gender: 'Male' | 'Female';
    date_of_birth: string;
    marital_status: string;
    age: number;
    homeDistrict: string;
    height: string;
    weight: string;
    religion: string;
  };
  images: {
    primary: string;
    gallery: string[];
  };
  profession: {
    category: 'Employment' | 'Business' | 'Student';
    sub_category: string;
    details: {
      institution_name?: string;
      [key: string]: any;
    };
    monthly_income_range: string;
  };
  educationMedium: 'Bangla' | 'English' | 'Madrasah';
  postedDate: Date; // Keep this as Date
}