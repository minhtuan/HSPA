import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    const user = this.authService.authUser(loginForm.value);
    if (user) {
      console.log(user);
      localStorage.setItem('token', user.userName);
      // console.log('Login successful');
      this.alertify.success('Login successful');
      this.router.navigate(['/']);
    } else {
      this.alertify.error('User or Password is wrong');
    }
  }

  cancel() {

  }
}
