import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthStateService } from './auth-state.service';
import { CredentialFormValues, ResAuth, SignupValues } from '../core/interfaces/auth/auth.interface';
import { environment } from '../../environments/environment';

export interface AuthDto {
  accessToken: string;
  role?: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  username: string;
  password: string;
}

export interface MailResetDto {
  email: string;
}

export interface VerifyPwdCodeDto {
  email: string;
  randomCode: string;
}

export interface ResetPwdDto {
  email: string;
  newPassword: string;
  confirmPassword: string;
}

interface AuthResponse {

      accessToken: string;
      role: string;

  }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private authStateService: AuthStateService,
  ) {}
  

  private apiUrl = environment.apiUrl;
  private jwtHelper = new JwtHelperService();

  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable(); 




  login(credentials: CredentialFormValues): Observable<any> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/signin`, credentials)
      .pipe(
        tap((response) => {
          console.log('Login response:', response);

          const token = response.accessToken.replace('Bearer ', '');
          const userData = this.jwtHelper.decodeToken(token);
          
          this.authStateService.setAuthState(
            response.accessToken,
            response.role,
            userData
          );
        })
      );
  }


  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/logout`, {}).pipe(
      tap(() => {
        // 确保在登出时清除状态
        this.authStateService.clearAuthState();
      })
    );
  }

  refreshToken(): Observable<ResAuth> {
    return this.http.post<ResAuth>(`${this.apiUrl}/auth/refresh`, {
      refreshToken: this.authStateService.getRefreshToken()
    }).pipe(
      tap((res) => {
        const token = res.accessToken.replace('Bearer ', '');
        const userData = this.jwtHelper.decodeToken(token);

        this.authStateService.setAuthState(
          res.accessToken,
          res.role,
          userData
        );

      })
    );
  }

  sendResetMail(dto: MailResetDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/mail-reset-pwd`, dto);
  }

  verifyPwdCode(dto: VerifyPwdCodeDto): Observable<{ email: string }> {
    return this.http.post<{ email: string }>(
      `${this.apiUrl}/verify-pwd-code`,
      dto
    );
  }

  resetPassword(dto: ResetPwdDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/reset-pwd`, dto);
  }

  initAuth() {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const isExpired = this.jwtHelper.isTokenExpired(token);
      if (!isExpired) {
        const userData = this.jwtHelper.decodeToken(token);
        this.userSubject.next(userData);
      } else {
        this.logout();
      }
    }
  }
}
