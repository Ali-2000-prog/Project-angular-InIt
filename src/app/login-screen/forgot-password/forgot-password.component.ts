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
  email:string='';
  constructor(private route: Router, private userApi: UserApiService) { }

  ngOnInit(): void {
  }

  onActivationLink(){
    this.userApi.getUserEmail(this.email).subscribe(
      (data)=>{
        console.log("frank15@ethereal.email");
        if(this.email == data[0].email){
          this.userApi.MailVerificationRecovery(this.email).subscribe();;
          alert("Mail Send");
          this.route.navigate(["ChangePasswordLogin"]);
        }
      },
      ()=>{
        alert("Invalid Mail");
      }
    );
    
  }
}
