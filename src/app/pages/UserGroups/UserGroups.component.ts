import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Group } from "src/app/Models/Group.model";
import { GroupApiService } from "src/app/Services/group-api.services";
import { DialogService } from "src/app/Services/Mat-dialogServices/dialog.service.ts.service";
import { AddGroupPopupComponent } from "./add-group-popup/add-group-popup.component";


@Component({
  selector: "app-UserGroups",
  templateUrl: "UserGroups.component.html"
})
export class UserGroupsComponent implements OnInit {
  constructor(private dialog: MatDialog, 
    private groupApi: GroupApiService,
    private dialogService: DialogService) {}
  

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
    const dialogRef = this.dialog.open(AddGroupPopupComponent,{
      disableClose:true
    })
    dialogRef.afterClosed().subscribe(()=>{
      this.getGroupData();
    });
  }


  onDeleteGroup(){
    console.log("deleting")
    
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res=>{
      if(res){
        //if true then execute delete of data
        for(let key in this.checked){
          console.log(this.checked[key])
          this.groupApi.DeleteGroup(this.checked[key]).subscribe(
            ()=>{
              console.log("Redoing");
              this.getGroupData();
            }
          );
        }
      }
    });
    this.getGroupData();
    
  }

  onSelectChange(e:any,id:number){
    if(e.target.checked){
      this.checked.push(id);
    }
    else{
      this.checked = this.checked.filter(m=>m!=id);
    }
  }
}
