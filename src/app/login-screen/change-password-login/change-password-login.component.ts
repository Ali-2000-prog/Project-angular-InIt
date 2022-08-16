import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/Services/user-api.service';

@Component({
  selector: 'app-change-password-login',
  templateUrl: './change-password-login.component.html',
  styleUrls: ['./change-password-login.component.scss']
})
export class ChangePasswordLoginComponent implements OnInit {
 
 
  pattern = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/);

  constructor(private route: Router, private userApi:UserApiService,private fb:FormBuilder) { }

  confirmold=1
  confirmp=1;

  ngOnInit(): void {
  }


  myFormChange = this.fb.group({
    
    password: ['',[
    Validators.required,
    Validators.pattern(this.pattern),
  ]],
  passwordConfirm: ['',[
    Validators.required,
    Validators.pattern(this.pattern),
  ]],
  code:['',[
    Validators.required,
    Validators.minLength(4)
  ]

  ]
  
  });

  get passwordForm(){return this.myFormChange.get('password')}
  get passwordFormConfirm(){return this.myFormChange.get('passwordConfirm')}
  get Code(){return this.myFormChange.get('code')}

  onChangePassword(){

    let password= this.myFormChange.get('password').value; 
    let passwordConfirm = this.myFormChange.get('passwordConfirm').value; 
    let code = this.myFormChange.get('code').value; 
    this.confirmp=1;
    console.log(code)
    if(password== passwordConfirm){
    //Call Update API
      var response: any = this.userApi.UpdateUserPassword(passwordConfirm, code).subscribe(
        (res)=>{
          console.log(res);
        },
        (err)=>{
         console.log(err); 
         
        }
      );
      alert("Password Changed")
      // this.route.navigate([""]);
   }else{
    this.confirmp=0;
      return;
   }
    
  }


}
