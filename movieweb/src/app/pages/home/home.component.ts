import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  email: string = '';
  
  constructor(private router: Router) {}

  goRegister() {
    if (this.email) {
      this.router.navigate(['/register'], {
        queryParams: { email: this.email }
      });
      

    } else {
      this.router.navigate(['/register']);
    }
  }
}

