import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { PasswordComponent } from '../password/password.component';
import { PlanComponent } from '../plan/plan.component';
import { SharedModule } from '../../../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RegisterRoutingModule } from './register-routing.module';
import { UserService } from '../../../services/user.service';

@NgModule({
  declarations: [
    RegisterComponent,
    UserInfoComponent,
    PasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    RegisterRoutingModule,
    PlanComponent
  ],
  providers: [UserService],
})

export class RegisterModule { }
