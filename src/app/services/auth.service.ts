import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, sendEmailVerification } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private firestore = inject(Firestore);

  // CRITICAL: Ensure this name is exactly 'signUp'
 async signUp(email: string, pass: string, profileData: any) {
  try {
    const credential = await createUserWithEmailAndPassword(this.auth, email, pass);
    await sendEmailVerification(credential.user);

    const profileRef = doc(this.firestore, 'profiles', credential.user.uid);
    await setDoc(profileRef, {
      ...profileData,
      uid: credential.user.uid,
      email: email,
      isVerified: false,
      createdAt: new Date()
    });

    // CHANGE THIS LINE: Include the uid in the return object
    return { success: true, uid: credential.user.uid }; 
    
  } catch (error: any) {
    console.error("Signup Error:", error);
    return { success: false, message: error.message, uid: null };
  }
}
}