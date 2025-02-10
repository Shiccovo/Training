import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { PasswordComponent } from '../password/password.component';
import { PlanComponent } from '../plan/plan.component';
import { SharedModule } from '../../../shared/shared.module';


const routes: Routes = [
  {
    path: '', 
    component: RegisterComponent,
    children: [
      { path: 'user-info', component: UserInfoComponent },
      { path: 'password', component: PasswordComponent },
      { path: 'plan', component: PlanComponent },
      { path: '', redirectTo: 'password', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule ],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }