import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  email: string = '';

  goRegister() {
    if (this.email) {
      window.location.href = `/register/password?email=${encodeURIComponent(this.email)}`;
    } else {
      window.location.href = '/register';
    }
  }
}

