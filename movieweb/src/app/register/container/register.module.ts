import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { PasswordComponent } from '../password/password.component';
import { PlanComponent } from '../plan/plan.component';
import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { TmdbkeyComponent } from '../user-info/tmdbkey/tmdbkey.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
      RegisterComponent,
      UserInfoComponent,
      PasswordComponent,
      PlanComponent,
      TmdbkeyComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    RegisterRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
})

export class RegisterModule { }
