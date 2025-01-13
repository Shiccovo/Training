import { Component } from '@angular/core';
import { NgForm, FormsModule, FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  user = {
    name: '',
    email: ''
  };

  testForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.testForm = this.fb.group({
      name: [''],
      email: ['']
    });
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}

