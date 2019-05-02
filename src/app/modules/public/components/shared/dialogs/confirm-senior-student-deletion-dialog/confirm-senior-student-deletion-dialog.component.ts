import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";



@Component({
  selector: 'app-confirm-senior-student-deletion-dialog',
  templateUrl: './confirm-senior-student-deletion-dialog.component.html',
  styleUrls: ['./confirm-senior-student-deletion-dialog.component.scss']
})
export class ConfirmSeniorStudentDeletionDialogComponent implements OnInit {

  constructor(private _matDialogRef: MatDialogRef<ConfirmSeniorStudentDeletionDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }


  closeDialog(wasAStudentDeleted: boolean) {
    this._matDialogRef.close(wasAStudentDeleted);
  }

  delete() {
    this.closeDialog(true);
  }
}
