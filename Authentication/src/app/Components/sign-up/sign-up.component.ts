import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(private fb: FormBuilder, private http:UserService) {}

  register!: FormGroup;


  ngOnInit() {
    this.register = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  SignUp() {
    this.http.register('CreateNewUser',this.register.value).subscribe(
(res)=>{
  console.log("sign up res",res)

}

    )
  }

}
