import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddUserPopupComponent } from "./add-user-popup/add-user-popup.component";

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  constructor(private dialog: MatDialog) {}


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

  ngOnInit() {}

  onAddUser(){
    this.dialog.open(AddUserPopupComponent,{
      disableClose: true
    });
  }
}
