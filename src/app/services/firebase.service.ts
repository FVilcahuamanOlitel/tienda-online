import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

  public auth: Auth;
  public firebase: Firestore;

  constructor() {
    const app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(app);
    this.firebase = getFirestore(app);
  }
}
