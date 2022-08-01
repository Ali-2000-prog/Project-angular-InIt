import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddGroupPopupComponent } from "./add-group-popup/add-group-popup.component";


@Component({
  selector: "app-UserGroups",
  templateUrl: "UserGroups.component.html"
})
export class UserGroupsComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  onAddGroup(){
    this.dialog.open(AddGroupPopupComponent,{
      height:"850px",
      width: "500px",
      disableClose:true
    })
  }
}
