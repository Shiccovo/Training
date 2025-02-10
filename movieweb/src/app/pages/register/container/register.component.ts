import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register',
  standalone:false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {
  errorMessage = '';
  email: string = '';

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private route: ActivatedRoute, 
    private userService: UserService) {}


  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      if (params['email']) {
        this.email = params['email'];
        this.userService.setEmail(this.email);
      }
    });
  }



  onSubmit() {
  //   this.authService.signUp(this.formData).subscribe({
  //     next: (res) => {
  //       console.log('Register success', res);

  //       this.router.navigateByUrl('/home');
  //     },
  //     error: (err) => {
  //       console.error('Register failed', err);
  //       this.errorMessage = err?.error?.message || 'Register Error';
  //     }
  //   });
  }
}
