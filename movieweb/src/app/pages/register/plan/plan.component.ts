import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../container/register.component';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
  imports: [MatIconModule]
})


export class PlanComponent implements OnInit {
  selectedPlan: string = 'basic';

  constructor(
    public parent: RegisterComponent,
    private router: Router,
    private UserService: UserService
  ) {}

  ngOnInit() {
    // this.selectedPlan = this.parent.plan;
  }

  selectPlan(plan: string) {
    this.selectedPlan = plan;
    // this.parent.setPlan(plan);
  }

  onSubmit() {
    this.UserService.submitRegistration().subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        this.UserService.clearRegisterData();
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Registration failed', error);
      }
    });
  }
}
