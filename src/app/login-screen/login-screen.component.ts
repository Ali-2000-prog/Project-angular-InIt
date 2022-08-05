import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../Models/User.model';
import { UserApiService } from '../Services/user-api.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  constructor(private route: Router, private userApi: UserApiService) { }

  name='';
  password='';
  correctp=0;
  correctname=0
  user:User;

  ngOnInit(): void {
    
  }

  onNewUser(){
    this.route.navigate(["/NewUser"]);
  }

  onLogin(){  
    // Calling APi for single User
    
    this.userApi.getUser(this.name)
    .subscribe((response)=>{
        
      this.user=response;
      console.log(response)
      this.userApi.user=response;
      //Method Will Verify User Password and name
      this.LoginUser(response.userName.toString(),response.password.toString());
    }); 
  }

  private LoginUser(name:string,password:string){

  
    if(password == this.password){
      console.log(this.name+" Login Sucess");
      this.route.navigate(["dashboard"]);
    }else{
      this.correctp = 1;
    }
  }
}
