import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { map } from 'rxjs/operators';
import { forkJoin, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitationsService {

  private messageSource = new BehaviorSubject(null);
  currentMessage = this.messageSource.asObservable();

  constructor(private db: AngularFirestore) { }

  // insert(user: any) {
  //   this.db.list('users').push(user)
  //     .then((result: any) => {
  //       console.log(result.key);
  //     });
  // }

  changeMessage(solicitation: any) {
    this.messageSource.next(solicitation)
  }

  updateStatus(key, status, reason) {
    return this.db.collection('solicitations').doc(key).set({ status: status, reason: reason }, { merge: true })
  }
 
  getAll() {
    return this.db.collectionGroup("users").snapshotChanges();
  }

  getSolicitations() {
    return this.db.collection('solicitations').snapshotChanges()
  }

  getFiles(key) {
    return this.db.collection('solicitations').doc(key).collection('files').snapshotChanges()
  }
}
