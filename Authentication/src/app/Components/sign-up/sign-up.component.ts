import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private http: UserService, private route:Router) {}

  registerForm!: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userId: [],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      mobileNo: ['', Validators.required],
      userSocialDetails: this.formBuilder.group({
        facebookProfileUrl: [''],
        linkdinProfileUrl: [''],
        instagramHandle: [''],
        twitterHandle: [''],
      }),
      UserAddress: this.formBuilder.group({
        city: [''],
        state: [''],
        pincode: [''],
        addressLine: [''],
      }),
    });
  }

  SignUp() {
    console.log('signUp', this.registerForm.value);
    console.log('signUp form Valid', this.registerForm.valid);

    
      this.http.register('register', this.registerForm.value).subscribe(
        (res:any) => {
          console.log('sign up response==>', res);
          if(res.success){

            this.route.navigate(['/login'])
            console.log('res.success==>', res.success);
          }
        });
    
  }
}
