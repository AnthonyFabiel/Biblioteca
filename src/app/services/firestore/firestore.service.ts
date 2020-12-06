import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) { }
//Aqui iria toda la logica para la comunicacion con firebase
//https://medium.com/angular-chile/angular-6-y-firestore-b7f270adcc96
}
