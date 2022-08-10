import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { User } from "src/app/Models/User.model";
import { DialogService } from "src/app/Services/Mat-dialogServices/dialog.service.ts.service";
import { UserApiService } from "src/app/Services/user-api.service";
import { AddUserPopupComponent } from "./add-user-popup/add-user-popup.component";

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  constructor(private dialog: MatDialog,private userApi: UserApiService, private dialogService: DialogService) {}

  listusers:User[]=[];
  checked:any[] = [];
  ngOnInit() {
    this.onload()
    
  }

  onload(){
    this.userApi.getUsers()
    .subscribe((data)=>{
      this.listusers=data;
      console.log(this.listusers);
    });
  }
  onAddUser(){
    const dialogRef = this.dialog.open(AddUserPopupComponent,{
      width:"550px",
      height:"850px",
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(()=>{
      this.onload();
    })
  }

  onDeleteUser(){
    this.dialogService.openConfirmDialog('Are you sure to delete User this record ?')
    .afterClosed().subscribe(res=>{
      if(res){
        for(let key in this.checked){
          this.userApi.DeleteUser(this.checked[key]).subscribe(
            ()=>{
              console.log("Redoing");
              this.onload();
            }
          );
        }
      }
    });
  }

  onSelectChange(e:any,uname:any){
    if(e.target.checked){
      this.checked.push(uname);
    }
    else{
      this.checked = this.checked.filter(m=>m!=uname);
    }
  }
}
