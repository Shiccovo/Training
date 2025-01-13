import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-info',
  standalone: false,

  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent {
  @Output() nextStep: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router){}

  username: string = '';
  tmdbKey: string = '';

  onSubmit() {
    console.log('Username: ', this.username);
    console.log('Tmdb Key: ', this.tmdbKey);
    this.nextStep.emit();
    this.router.navigate(['/register/plan']);
  }
}
