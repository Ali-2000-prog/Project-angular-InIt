import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User.model';
import { UserApiService } from 'src/app/Services/user-api.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(private route: Router, 
    private userApi:UserApiService,
    private fb:FormBuilder) { }
  
  pattern = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/);
  desig='Software Engineer';
  depart='Software Development';

  ngOnInit(): void {
  }

  myForm = this.fb.group({
    email:['',[
      Validators.required,
      Validators.email
    ]],
    password: ['',[
    Validators.required,
    Validators.pattern(this.pattern),
    Validators.minLength(8) 
  ]],
    username: ['',[
    Validators.required,
    Validators.minLength(4),
  ]],
    fullname: ['',[
    Validators.required,
  ]],
   employeNo: ['',[
    Validators.required,
    Validators.minLength(4)
  ]],
    phoneno: ['',[
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(8) 
  ]],
  });

  get passwordForm(){return this.myForm.get('password')}
  get usernameForm(){return this.myForm.get('username')}
  get emailForm(){return this.myForm.get('email')}
  get fullnameForm(){return this.myForm.get('fullname')}
  get phonenoForm(){return this.myForm.get('phoneno')}
  get employeNoForm(){return this.myForm.get('employeNo')}

  onSelectedDesignation(value:string){
    this.desig = value;
  }

  onSelectedDepartment(value:string){
    this.depart = value;
  }
  
  onRegister(){
    let password = this.myForm.get('password').value; 
    let email =  this.myForm.get('email').value;
    let uname = this.myForm.get('username').value;
    let fname = this.myForm.get('fullname').value;
    let phoneno = this.myForm.get('phoneno').value;
    let employeNo = this.myForm.get('employeNo').value;
    
    if(this.myForm.invalid){
      alert("Failed Form")
      return;
    }

    let x = new User(uname,fname,email,password,employeNo,this.desig,this.depart,phoneno);
    // this.userApi.CreateUser(x).subscribe();
    console.log(x)
    alert("User Created Succesfully Redirecting back to login")
    // this.route.navigate([""]);
  }


}
