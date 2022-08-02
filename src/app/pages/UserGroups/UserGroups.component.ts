import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Group } from "src/app/Models/Group.model";
import { GroupApiService } from "src/app/Services/group-api.services";
import { AddGroupPopupComponent } from "./add-group-popup/add-group-popup.component";


@Component({
  selector: "app-UserGroups",
  templateUrl: "UserGroups.component.html"
})
export class UserGroupsComponent implements OnInit {
  constructor(private dialog: MatDialog, private groupApi: GroupApiService) {}

  listgroups:Group[]=[];

  Groups:{c1,c2,c3}[]=[
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

  ngOnInit( ) {
    this.groupApi.getUsers().subscribe(
      (data)=>{
        this.listgroups = data;
        console.log(this.listgroups)
      }
    )
  }

  onAddGroup(){
    this.dialog.open(AddGroupPopupComponent,{
      disableClose:true
    })
  }

  onclick(){}
}
