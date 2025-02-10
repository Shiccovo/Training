import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../container/register.component';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-info',
  standalone:false,
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  username: string = '';
  tmdbKey: string = '';

  constructor(
    public parent: RegisterComponent,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {

    // this.username = this.parent.username;
    // this.tmdbKey = this.parent.tmdbKey;
  }

  onSubmit() {
    if (this.validateInput()) {
      this.userService.setUserInfo(this.username, this.tmdbKey);
      this.router.navigate(['/register/plan']);
    }
  }

  private validateInput(): boolean {
    if (this.username.length < 4 || this.username.length > 10) {
      alert('Username must be between 4 and 10 characters');
      return false;
    }
    if (this.tmdbKey.length < 10) {
      alert('TMDB API Key must be at least 10 characters');
      return false;
    }
    return true;
  }
}
