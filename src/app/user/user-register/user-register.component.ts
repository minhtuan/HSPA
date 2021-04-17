import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';

// type ValidationErrors = {
//   [key: string]: any;
// };

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm: FormGroup;
  user: User;
  userSubmitted: boolean;

  constructor(private fb: FormBuilder, private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
    // this.registerationForm = new FormGroup({
    //   userName: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    //   confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    //   mobile: new FormControl(null, [Validators.required, Validators.maxLength(15)])
    // }, this.passwordMatchingValidator);
    this.createRegisterationForm();
  }

  createRegisterationForm(){
    this.registerationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(6)]],
      mobile: [null, [Validators.required, Validators.maxLength(15)]]
    }, {validators: this.passwordMatchingValidator});
  }

  // passwordMatchingValidator(fg: FormGroup): Validators {
  //   return fg.get('password').value === fg.get('confirmPassword').value ? null :
  //   { notMatched: true };
  // }
  passwordMatchingValidator(fg: FormGroup) {
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
    { notMatched: true };
  }

  userData(): User {
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }

  get userName(){
    return this.registerationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registerationForm.get('email') as FormControl;
  }
  get password(){
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registerationForm.get('mobile') as FormControl;
  }

  onSubmit(){
    console.log(this.registerationForm);
    this.userSubmitted = true;

    if(this.registerationForm.valid){
      //this.user = Object.assign(this.user, this.registerationForm.value);
      this.userService.addUser(this.userData());
      //reset register form
      this.registerationForm.reset();
      this.userSubmitted = false;
      //
      this.alertify.success("Congrats, you are success");
    } else {
      this.alertify.error("Kindly provide the required fields");
    }

  }

  onReset(){
    this.registerationForm.reset();
  }
}
