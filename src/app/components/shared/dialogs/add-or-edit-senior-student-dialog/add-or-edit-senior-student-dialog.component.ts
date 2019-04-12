import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";



@Component({
  selector: 'app-add-or-edit-senior-student-dialog',
  templateUrl: './add-or-edit-senior-student-dialog.component.html',
  styleUrls: ['./add-or-edit-senior-student-dialog.component.scss']
})
export class AddOrEditSeniorStudentDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddOrEditSeniorStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

}
