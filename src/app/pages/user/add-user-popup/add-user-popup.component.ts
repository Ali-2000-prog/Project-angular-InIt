import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/Models/User.model';
import { UserApiService } from 'src/app/Services/user-api.service';

@Component({
  selector: 'app-add-user-popup',
  templateUrl: './add-user-popup.component.html',
  styleUrls: ['./add-user-popup.component.scss']
})
export class AddUserPopupComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddUserPopupComponent>,
    private userApi:UserApiService) { }

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
    let x = new User(this.uname,this.fname,this.email,this.password,this.employeNo,this.desig,this.depart,this.phoneno);
    this.userApi.CreateUser(x).subscribe();
    this.onClose();
  }

}
