import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from '../../services/auth-state.service';
import { User } from '../../core/interfaces/auth/auth.interface';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() showLogin: boolean = true;
  @Input() backgroundColor: string = 'rgba(0, 0, 0, 0)';
  currentUser: User | null = null;

  constructor(
    private router: Router,
    private authStateService: AuthStateService
  ) {}

  ngOnInit() {
    this.authStateService.user$.subscribe(user => {
      this.currentUser = user;
      console.log(this.currentUser);
    });
  }
  
  goLogin() {
    this.router.navigate(['/login']);
  }

  onLogout() {
    this.authStateService.clearAuthState();
    this.router.navigate(['/']);
  }
}
