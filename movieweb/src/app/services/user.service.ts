import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

export interface UserData {
  email: string;
  password: string;
  username: string;
  role: string;
  tmdb_key: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;

  private registerData: UserData = {
    email: '',
    password: '',
    username: '',
    role: 'SUPERUSER', 
    tmdb_key: ''
  };


  private emailSubject = new BehaviorSubject<string>('');
  email$ = this.emailSubject.asObservable();

  constructor(private http: HttpClient) {}

  setEmail(email: string) {
    this.emailSubject.next(email);
    this.registerData.email = email;
  }

  get currentEmail(): string {
    return this.emailSubject.value;
  }

  setPassword(password: string) {
    this.registerData.password = password;
  }

  setUserInfo(username: string, tmdbKey: string) {
    this.registerData.username = username;
    this.registerData.tmdb_key = tmdbKey;
  }


  getCurrentRegisterData(): UserData {
    return {...this.registerData};
  }


  submitRegistration() {
    return this.http.post(`${this.apiUrl}/auth/signup`, this.registerData);
  }



  clearRegisterData() {
    this.registerData = {
      email: '',
      password: '',
      username: '',
      role: 'SUPERUSER',
      tmdb_key: ''
    };
    this.emailSubject.next('');
  }
}