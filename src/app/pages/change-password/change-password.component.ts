import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserApiService } from 'src/app/Services/user-api.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ChangePasswordComponent>,private userApi:UserApiService) { }

  newpassword='';
  oldpassword='';
  confirmold=1
  confirmpassword='';
  confirmp=1;
  ngOnInit(): void {
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }

  onChangePassword(){
    this.confirmp=1;
    this.confirmold=1
    if(this.oldpassword == this.userApi.user.password){
      if(this.newpassword == this.confirmpassword){
        //Call Update API
        // this.userApi.UpdateUserPassword(this.userApi.user.userName,this.confirmpassword).subscribe();
        this.dialogRef.close();
      }else{
        this.confirmp=0;
        return;
      }
    }else{
      this.confirmold=0;
      console.log(this.newpassword)
      return;
    }
  }
}
