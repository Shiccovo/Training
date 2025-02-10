import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  standalone:false,
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(params['email']) {
        this.email = params['email'];
      }
    });
  }

  onSubmit(){
    this.userService.setEmail(this.email);
    this.userService.setPassword(this.password);
    this.router.navigate(['/register/user-info']);
  }
}