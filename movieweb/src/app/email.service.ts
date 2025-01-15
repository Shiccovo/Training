import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailSource = new BehaviorSubject<string>('');
  currentEmail = this.emailSource.asObservable();

  setEmail(email: string) {
    this.emailSource.next(email);
  }


  constructor() { }
}
