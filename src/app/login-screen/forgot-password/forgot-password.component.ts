import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User.model';
import { UserApiService } from 'src/app/Services/user-api.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email='';
  user:User;
  constructor(private route: Router, private userApi: UserApiService) { }

  ngOnInit(): void {
  }

  onActivationLink(){
    this.userApi.getUserEmail(this.email).subscribe(
      (data)=>{
        this.user=data;
        console.log(data);
        this.userApi.user=data;
      }
    );
    this.route.navigate(["/ChangePassword"]);
  }
}
