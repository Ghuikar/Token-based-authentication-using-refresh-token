import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private http: UserService) {}

  ngOnInit() {
    this.getAllUsers();
  }


  getAllUsers() {
    console.log("dashboaed called")
    this.http.getAllUsers('GetAllUsers').subscribe(
      (res) => {
      console.log('getAllUsers==>', res);
    });
  }
  
}
