import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/Models/User.model';
import { UserApiService } from 'src/app/Services/user-api.service';

@Component({
  selector: 'app-update-user-popup',
  templateUrl: './update-user-popup.component.html',
  styleUrls: ['./update-user-popup.component.scss']
})
export class UpdateUserPopupComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<UpdateUserPopupComponent>,
    private userApi:UserApiService, 
    private fb:FormBuilder) { }

  desig='Software Engineer';
  depart='Software Development';
  pattern = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/);
  myFormUser = this.fb.group({
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

  get passwordForm(){return this.myFormUser.get('password')}
  get usernameForm(){return this.myFormUser.get('username')}
  get emailForm(){return this.myFormUser.get('email')}
  get fullnameForm(){return this.myFormUser.get('fullname')}
  get phonenoForm(){return this.myFormUser.get('phoneno')}
  get employeNoForm(){return this.myFormUser.get('employeNo')}
  
  ngOnInit(): void {
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }

  onClose(){
    this.dialogRef.close();
  }

  onSelectedDesignation(value:string){
    this.desig = value;
  }

  onSelectedDepartment(value:string){
    this.depart = value;
  }

  onAddUser(){
    let password = this.myFormUser.get('password').value; 
    let email =  this.myFormUser.get('email').value;
    let uname = this.myFormUser.get('username').value;
    let fname = this.myFormUser.get('fullname').value;
    let phoneno = this.myFormUser.get('phoneno').value;
    let employeNo = this.myFormUser.get('employeNo').value;
    
    if(this.myFormUser.invalid){
      alert("Failed Form")
      return;
    }
    let x = new User(uname,fname,email,password,employeNo,this.desig,this.depart,phoneno);
    // ;
    this.onClose();
  }

}
