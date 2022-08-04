import { AfterContentChecked, Component, OnInit } from "@angular/core";
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
  checked:any[] = [];
  ngOnInit( ) {
    this.getGroupData();
  }

  getGroupData(){
    this.groupApi.getUsers().subscribe(
      (data)=>{
        this.listgroups = data;
        // console.log(this.listgroups)
      }
    )
  }

  onAddGroup(){
    this.dialog.open(AddGroupPopupComponent,{
      disableClose:true
    })
  }


  onDeleteGroup(){
    console.log("deleting")
    for(let key in this.checked){
      console.log(this.checked[key])
      this.groupApi.DeleteGroup(this.checked[key]).subscribe(
        (response)=>{
          this.getGroupData();
        },
        (err)=>{
          this.getGroupData();
        }
      );
    }

    // this.getGroupData();
    
  }

  onSelectChange(value:any){
    this.checked.push(value)
  }
}
