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

  groupId:string = '';
  groupName:string = '';
  options:string = '';
  role:string = '';
  active: any;
  group:Group;
  ngOnInit(): void {
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }


  onAddGroup(){
    // this.groupApi
    console.log(new Group(this.groupId,this.groupName,this.options,this.role,this.active))
  }
  
}
