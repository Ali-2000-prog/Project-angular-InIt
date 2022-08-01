import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onNewUser(){
    this.route.navigate(["/NewUser"]);
  }

  onLogin(){

  }
}
