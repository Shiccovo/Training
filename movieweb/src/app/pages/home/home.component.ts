import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AuthStateService } from '../../services/auth-state.service';
import { User } from '../../core/interfaces/auth/auth.interface';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  email: string = '';
  currentUser: User | null = null;
  
  constructor(private router: Router, private authService: AuthService,    
    private authStateService: AuthStateService) {
    this.authStateService.user$.subscribe(user => {
      this.currentUser = user;
    });
  }



  goRegister() {
    if (this.email) {
      this.router.navigate(['/register'], {
        queryParams: { email: this.email }
      });
      

    } else {
      this.router.navigate(['/register']);
    }
  }

  goToMovies() {
    this.router.navigate(['/movie-list']);
  }
}

