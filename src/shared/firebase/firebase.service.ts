import { Injectable } from '@angular/core';
import {collection, collectionData, Firestore} from "@angular/fire/firestore";
import {CollectionReference, DocumentData} from "@firebase/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: Firestore) { }

  get(path: string): Observable<DocumentData[]>{
    return collectionData(collection(this.firestore, path))
  }
}
