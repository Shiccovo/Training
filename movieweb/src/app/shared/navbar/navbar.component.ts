import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() showLogin: boolean = true;

  constructor(private router:Router){}
  onSubmit(){
    this.router.navigate(['/login']);
  }
}
