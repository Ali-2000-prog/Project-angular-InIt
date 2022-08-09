import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  constructor(private dialogRef: MatDialogRef<AddGroupPopupComponent>, private groupApi: GroupApiService, private fb:FormBuilder) { }

  options:string = 'Option 1';
  role:string = 'Admin';
  active: any;
  group:Group;
  
  pattern = new RegExp(/^[1-9]+[0-9]*$/);
  ngOnInit(): void {
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }
  
  myFormGroup = this.fb.group({
    groupId:['',[
      Validators.required,
      Validators.pattern(this.pattern)
    ]],
    groupName: ['',[
    Validators.required,
    Validators.minLength(4),
  ]],
  });

  get passwordForm(){return this.myFormGroup.get('groupId')}
  get usernameForm(){return this.myFormGroup.get('groupName')}

  onAddGroup(){
    if(this.myFormGroup.invalid){
      alert("Failed Form")
      return;
    }
    const checkbox = document.getElementById('activeCheck') as HTMLInputElement
    if(checkbox?.checked){
      this.active = true;
    }else{this.active = false}
    
    let groupId = this.myFormGroup.get("groupId").value;
    let groupName = this.myFormGroup.get("groupName").value;
    let x = new Group(groupId,groupName,this.role,this.options,this.active)

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
