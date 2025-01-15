import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-password',
  standalone: false,
  
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss'
})
export class PasswordComponent implements OnInit {
  @Output() nextStep: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      if (params['email']) {
        this.email = params['email'];
      }
    });
  }

  email: string = '';
  tmdbKey: string = '';
  password: string = '';

  onSubmit() {
    console.log('Email:', this.email);
    this.nextStep.emit();
    this.router.navigate(['/register/user-info']);
  }
}
