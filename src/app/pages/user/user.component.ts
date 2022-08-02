import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { User } from "src/app/Models/User.model";
import { UserApiService } from "src/app/Services/user-api.service";
import { AddUserPopupComponent } from "./add-user-popup/add-user-popup.component";

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  constructor(private dialog: MatDialog,private userApi: UserApiService) {}

  listusers:User[]=[];

  Users:{c1,c2,c3}[]=[
    { c1:"a1",
      c2:"a2",
      c3:"a3"
    },
    { c1:"b1",
      c2:"b2",
      c3:"b3"
    },
    { c1:"c1",
      c2:"c2",
      c3:"c3"
    },
  ];

  ngOnInit() {
    this.userApi.getUsers()
    .subscribe((data)=>{
      this.listusers=data;
    });
  }

  onAddUser(){
    this.dialog.open(AddUserPopupComponent,{
      width:"500px",
      height:"800px",
      disableClose: true
    });
  }
}
