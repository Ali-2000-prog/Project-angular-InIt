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
    this.dialog.open(AddUserPopupComponent,{
      width:"500px",
      height:"800px",
      disableClose: true
    });
  }

  onDeleteUser(){

    for(let key in this.checked){
      this.userApi.DeleteUser(this.checked[key]).subscribe(
        ()=>{
          console.log("Redoing");
          this.onload();
        }
      );
    }
    
  }

  onSelectChange(value:any){
    this.checked.push(value)
  }
}
