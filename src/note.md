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

- 