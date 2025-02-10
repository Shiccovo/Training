// src/app/auth/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone:false ,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    const loginData = {
      email: this.email,
      password: this.password
    };

    this.authService.login(loginData).subscribe({
      next: (response) => {
        if (response.accessToken) {
          console.log('Login successful');
          this.router.navigateByUrl('/movie-list');
        } else {
          this.errorMessage = 'Invalid response format';
          console.error('Invalid response format:', response);
        }
      },

      error: (err) => {
        console.error('Login error:', err);
        this.errorMessage = err?.error?.message || 'failed Try again';
      }
    });
  }

}
