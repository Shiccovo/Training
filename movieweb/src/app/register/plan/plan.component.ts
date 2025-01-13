import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan',
  standalone: false,
  
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.scss'
})
export class PlanComponent {
  @Output() nextStep: EventEmitter<void> = new EventEmitter<void>();
  selectedPlan: string = 'basic';  // 默认选择基础套餐

  constructor(private router:Router){}

  selectPlan(plan: string) {
    this.selectedPlan = plan;
  }
  
  onSubmit() {
    console.log('Selected Plan: ', this.selectedPlan);
    this.nextStep.emit();
    this.router.navigate(['']);
  }
}
