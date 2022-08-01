import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-group-popup',
  templateUrl: './add-group-popup.component.html',
  styleUrls: ['./add-group-popup.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddGroupPopupComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddGroupPopupComponent>) { }

  ngOnInit(): void {
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }
  
}
