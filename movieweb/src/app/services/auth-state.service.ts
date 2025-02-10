import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../core/interfaces/auth/auth.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private readonly TOKEN_KEY = 'accessToken';
  private readonly ROLE_KEY = 'userRole';
  private readonly USER_KEY = 'userData';

  private userSubject = new BehaviorSubject<User | null>(null);
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  user$ = this.userSubject.asObservable();
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private router: Router) {
    this.initializeState();
    this.isAuthenticated$.subscribe((isAuthenticated) => {
      if (!isAuthenticated) {
        this.router.navigate(['/']);
      }
    });
  }

  private initializeState() {
    try {
      const token = localStorage.getItem(this.TOKEN_KEY);
      const userStr = localStorage.getItem(this.USER_KEY);
      
      if (token && userStr) {
        const userData = JSON.parse(userStr);
        this.userSubject.next(userData);
        this.isAuthenticatedSubject.next(true);
        console.log('Auth state initialized with:', { token, userData });
      }
    } catch (error) {
      console.error('Auth state initialization error:', error);
      this.clearAuthState();
    }
  }

  setAuthState(token: string, role: string, userData: User) {
    console.log('Setting auth state:', { token, role});

    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.ROLE_KEY, role);
    if (userData) {
      localStorage.setItem(this.USER_KEY, JSON.stringify(userData));
      this.userSubject.next(userData); 
    }
    
    this.isAuthenticatedSubject.next(true);
  }

  clearAuthState() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.ROLE_KEY);
    localStorage.removeItem(this.USER_KEY);
    
    this.userSubject.next(null);
    this.isAuthenticatedSubject.next(false);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.ROLE_KEY);
  }

  private getStoredUser(): User | null {
    const userStr = localStorage.getItem(this.USER_KEY);
    if (!userStr) return null;
    
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  }

  getCurrentUser(): User | null {
    return this.userSubject.value;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
} 