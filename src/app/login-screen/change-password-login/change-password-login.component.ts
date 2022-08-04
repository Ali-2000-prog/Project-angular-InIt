import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/Services/user-api.service';

@Component({
  selector: 'app-change-password-login',
  templateUrl: './change-password-login.component.html',
  styleUrls: ['./change-password-login.component.scss']
})
export class ChangePasswordLoginComponent implements OnInit {


  constructor(private route: Router, private userApi:UserApiService) { }
  newpassword='';
  oldpassword='';
  confirmold=1
  confirmpassword='';
  confirmp=1;
  ngOnInit(): void {
  }

  onChangePassword(){
    this.confirmp=1;
    this.confirmold=1
    if(this.oldpassword == this.userApi.user[0].password){
      if(this.newpassword == this.confirmpassword){
        //Call Update API
        this.userApi.UpdateUserPassword(this.userApi.user[0].userName,this.confirmpassword).subscribe();
        alert("Password Changed")
        this.route.navigate([""]);
      }else{
        this.confirmp=0;
        return;
      }
    }else{
      this.confirmold=0;
      console.log(this.userApi.user[0].password)
      console.log(this.newpassword)
      return;
    }
  }
  // Testuser2@Email.com

}
