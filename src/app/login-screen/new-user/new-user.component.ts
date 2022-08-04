import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User.model';
import { UserApiService } from 'src/app/Services/user-api.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(private route: Router, private userApi:UserApiService) { }

  uname='';
  fname='';
  email='';
  password='';
  phoneno:number;
  employeNo:number;
  desig='Software Engineer';
  depart='Software Development';
  
  ngOnInit(): void {
  }

  onSelectedDesignation(value:string){
    this.desig = value;
  }

  onSelectedDepartment(value:string){
    this.depart = value;
  }
  
  onRegister(){
    let x = new User(this.uname,this.fname,this.email,this.password,this.employeNo,this.desig,this.depart,this.phoneno);
    this.userApi.CreateUser(x).subscribe();
    alert("User Created Succesfully Redirecting back to login")
    this.route.navigate([""]);
  }


}
