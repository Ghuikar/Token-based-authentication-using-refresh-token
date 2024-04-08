import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: UserService, private route:Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
     
    console.log('login', this.loginForm.value);
    this.http.login('login', this.loginForm.value).subscribe(
      (res: any) => {
      const accessToken = res.data.accessToken;
      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        console.log('accessToken=', accessToken);
      }
     this.route.navigate(['/dashboard'])
    });
  }

  logOut() {

    // localStorage.removeItem(accessToken)

  }
}
