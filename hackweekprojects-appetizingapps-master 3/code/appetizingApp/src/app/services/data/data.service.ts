import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth"
import { AngularFirestore } from "@angular/fire/firestore";
import { Business } from "../../types/business";
import { Item } from "../../types/item";
import { Observable, of } from 'rxjs';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore
  ) { }

  //function to get businesses from database
  getBusinesses(): Observable<Business[]> {
    return this.db
      .collection<Business>("businesses")
      .valueChanges();
  }

  //function to get favorites from database
  getFavorites(userId: string): Observable<Business[]> {
    return this.db
      .collection<Business>("businesses", (ref) => ref.where('favoritedBy', 'array-contains', userId))
      .valueChanges();
  }

  //function to add favorite to database
  addFavorite(businessId: string, userId) {
    this.db
    .collection("businesses")
    .doc(businessId)
    .update({
      favoritedBy: firebase.firestore.FieldValue.arrayUnion(userId)
    });
  }

  //function to delete favorite
  deleteFavorite(businessId: string, userId: string) {
    this.db
    .collection("businesses")
    .doc(businessId)
    .update({
      favoritedBy: firebase.firestore.FieldValue.arrayRemove(userId)
    });
  }

  //called by menu page- returns items from database
  getBusiness(businessId: string): Observable<Business> {
    return this.db.collection("businesses").doc<Business>(businessId).valueChanges();
  }

  //called by menupage- returns items from database
  getMenu(businessId: string): Observable<Item[]> {
    return this.db.collection("businesses").doc(businessId).collection<Item>("menu").valueChanges();
  }
}
