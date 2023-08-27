import {Injectable} from '@angular/core';
import {collection, collectionData, Firestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: Firestore) { }

  get<T>(path: string): Observable<T[]>{
    return collectionData(collection(this.firestore, path)) as Observable<T[]>
  }
}
