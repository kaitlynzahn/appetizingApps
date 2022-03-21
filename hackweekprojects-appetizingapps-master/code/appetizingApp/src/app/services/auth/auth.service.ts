import { Injectable } from '@angular/core';
import { User } from '../../types/user';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //set session
  constructor(private auth: AngularFireAuth, private afs: AngularFirestore) {
    this.auth.setPersistence("session");
  }

  //log user in
  async login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  //log user out
  async logout() {
    return this.auth.signOut();
  }

  //register user
  async register(name: string, email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password).then(result => {
      const newUser: User = {
        first: name,
        email: email,
        uid: result.user.uid,
        favorites: []
      };
      this.setUserData(newUser);
    });
  }

  //set user data
  setUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    return userRef.set(user, {merge: true});
  }

  //check if valid user
  async checkUser() {
    return this.auth.currentUser;
  }
}
