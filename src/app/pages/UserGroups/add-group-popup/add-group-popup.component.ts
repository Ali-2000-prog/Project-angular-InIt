import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Group } from 'src/app/Models/Group.model';
import { GroupApiService } from 'src/app/Services/group-api.services';

@Component({
  selector: 'app-add-group-popup',
  templateUrl: './add-group-popup.component.html',
  styleUrls: ['./add-group-popup.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddGroupPopupComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddGroupPopupComponent>, private groupApi: GroupApiService) { }

  groupId:number;
  groupName:string = '';
  options:string = 'Option 1';
  role:string = 'Admin';
  active: any;
  group:Group;
  ngOnInit(): void {
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }


  onAddGroup(){
    // this.groupApi
    const checkbox = document.getElementById('activeCheck') as HTMLInputElement

    if(checkbox?.checked){
      this.active = true;
    }else{this.active = false}
    
    let x = new Group(this.groupId,this.groupName,this.role,this.options,this.active)
    this.groupApi.CreateGroup(x).subscribe();
    this.dialogRef.close();


  }

  onSelectedRole(value:string){
    this.role = value;
  }

  onSelectedOption(value:string){
    this.options = value;
  }
  
}
