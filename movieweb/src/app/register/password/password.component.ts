import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  standalone: false,
  
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss'
})
export class PasswordComponent {
  @Output() nextStep: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router){}

  email: string = '';
  tmdbKey: string = '';

  onSubmit() {
    
    this.nextStep.emit();
    this.router.navigate(['/register/user-info']);
  }
}
