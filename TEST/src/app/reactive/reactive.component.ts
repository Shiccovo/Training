import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.scss'
})
export class ReactiveComponent implements OnInit {
  @Output() transferData = new EventEmitter<any>();
  testForm!: FormGroup;

  ngOnInit() {
    this.testForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });


    this.testForm = new FormGroup({
      name: new FormControl('', [Validators.required,Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9.]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])
    });

  }
  
  static gte(control: AbstractControl): ValidationErrors | null {
    const length = control.value?.length || 0;
    if (length < 10) {
      return { 'gte': true };
    }
    return null;
  }



  constructor(private formBuilder: FormBuilder) { }

  get name() {
    return this.testForm.get('name');
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      console.log(form.value);
      this.transferData.emit(form.value);
    }
  }
}
