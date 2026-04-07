- register and post

- clikcing post profile button or clicking register will start this flow
- all contents will be on the top of the attached card.jpg to give similar looks

- There will be 6 steps, each step is similar, data colletion and save to database, since no real 
  database is connected now , will be using local storage for the time being

- I am attaching the step-1.jpeg. you have to create this page. since it is a first step, there  should not be back button.

- As I shall deploy to google cloud and use google cloud fire store eventually, but for the time being i shall use local storage, write code in such a way that I can casily connect to google cloud fire store later

- Strategy: The "Patch" Approach
Instead of creating a new file every time, we will use a unique Document ID ( a generated UID) and use the set or update method.

Step 1: Create the document with initial data

Step 2–6: Append/Merge new fields into that same document using { merge: true }

- this way , I am creating the  JSON progressively in each step, it means if user left and come back again, all data will be populated from the saved data and he can continue to finish the rest of the step, after finish step 1 , user can login if he likes, to login the system, he does not need to finish all the step. Do not do the login now, we will do login later

- Now do only Step 1 as according to  the attached image: step-1.jpeg





- previously, I aked you to use card.jpg to give similar looks. But same look taking more space, please modify the code - to take smaller space, clear and should give feels to user that not too many field to fill up. more from friendly ui, therefore remove the card.jpg that we use before, it does not need to give similar looks and feels, the main idea is form friendly ui and give feeling no too many fields


- Now start Step 2

- The bar of completion at the top similar to the attched imaage as you have created in step 1

- Photo Upload

- Please upload 3 photos of 400*600 px (recommanded)

- There will be 3 html field to upload 3 photos, called Primary Photo, Secondary Photo-1, Secondary Photo-2

- all 3 photos are required

- At the end like previous step Save & Exit

- and Back button to back to step 2

- At the the rest button to clear all field


- implemention note: I need to use IndexedDB to save the file. When Backend is Ready then Firebase Storage (The "Bucket"): You upload the actual image files here. It gives you back a URL.

 - Cloud Firestore (The "Database"): You save the URL (text) into your Step 2 JSON.

 Phase 2: Connecting the Backend (Later)
Modify your "Save & Next" function in Step 2 to do this:

Upload: Take the file and send it to Firebase Storage.

Get URL: Wait for the download URL to come back.

Save JSON: Put that URL into your step2: { mainPhoto: 'https://...' } object and save the JSON to Firestore.


changing the landing page for this application

  - the new landing page
  - there will no left filter in this landing page
  - main listing page will not be there

  now let me tell you what this page contains
  top item such as Hi Sign in or register amnd MyList and notification - will reamin same
  logo , search box, post profile and user icon - will remian same
  new items as follows:
  align all the following drop down horizontally

  looking for, Religion, Maritial Status, Home District, Degree, Age(from) to Age(to)

  note: "looking for" items - [Bride, Groom]
  Maritial Status - you figure out the list
  Home District- you figure out all district in bangldesh, sorted in ascending order
  Degree - list all degree common in Bangladesh like SSC, HSC, Diploma, Bachelor, etc (you figure out)
  Age(from) - list of year starting from 18 to 80
  Age(to) - list of year starting from 18 to 80

  Please remove the search button, because, there will be list of anchor  - in the next line

horizontally  - position  the following anchor namely

Profession, Home District, Current District, Living Abroad, College/Universities

by clicking the above link will populate the main content area. I shall let you in the later how to get data for the population. do not render the main content yet. 


- clicking profession will render the main content

it will go to Google Cloud Firestore in the backend and get the json, but backend is not done yet.

This json already exist in profile.service.ts file. read this json form profile.service.ts file

const rawData = [
  {
    "id": "USER_01_BCS_ADMIN",
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
      "category": "Employment",
      "sub_category": "Civil Service",
      "details": { "institution_name": "Dhaka University", "designation": "Assistant Commissioner" },
      "monthly_income_range": "60k - 80k BDT"
    },
    "educationMedium": "English",
    "postedDate": "2026-03-01T10:00:00Z"
  },
  {
    "id": "USER_02_BIZ_TECH",
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
      "category": "Employment",
      "sub_category": "Teaching",
      "details": { "institution_name": "Scholastica", "designation": "Senior Teacher" },
      "monthly_income_range": "45k - 60k BDT"
    },
    "educationMedium": "Bangla",
    "postedDate": "2026-03-05T14:30:00Z"
  },
  {
    "id": "USER_05_ACADEMIA_NSU",
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
      "category": "Employment",
      "sub_category": "Academia",
      "details": { "institution_name": "North South University (NSU)", "designation": "Lecturer" },
      "monthly_income_range": "80k - 110k BDT"
    },
    "educationMedium": "English",
    "postedDate": "2026-03-15T09:00:00Z"
  },
  {
    "id": "USER_06_BCS_POLICE",
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
      "category": "Employment",
      "sub_category": "Civil Service",
      "details": { "institution_name": "Police Academy", "designation": "Assistant Commissioner (ASP)" },
      "monthly_income_range": "60k - 85k BDT"
    },
    "educationMedium": "English",
    "postedDate": "2026-03-10T11:20:00Z"
  },
  {
    "id": "USER_07_ACADEMIA_DU",
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
      "category": "Employment",
      "sub_category": "Academia",
      "details": { "institution_name": "University of Dhaka (DU)", "designation": "Professor" },
      "monthly_income_range": "120k - 150k BDT"
    },
    "educationMedium": "Bangla",
    "postedDate": "2026-04-01T12:00:00Z"
  },
  {
    "id": "USER_08_BCS_FOREIGN",
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
      "category": "Employment",
      "sub_category": "Civil Service",
      "details": { "institution_name": "Ministry of Foreign Affairs", "designation": "Assistant Secretary" },
      "monthly_income_range": "70k - 95k BDT"
    },
    "educationMedium": "English",
    "postedDate": "2026-03-12T08:45:00Z"
  }
]


form the above sample json, the following data will be displayed when click profession:

then main content will be rendered vertically as

Civil Service(3) 
Academia (2)

Self-Employed(2)

Teaching(1)

Graduate Student(1)

those are the nimber of records whose sub_category value is Civil Service. In the above jhon there are 3 such records.

since there will be lot of sub_category and a lot of entry in the main content area eventually, therefore use 100% width and render list horizontally as floows.

Civil Service(3),Academia (2), Self-Employed(2), Teaching(1), Graduate Student(1) as link
























  






