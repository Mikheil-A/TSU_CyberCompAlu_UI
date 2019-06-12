import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {StudentsService} from "../../../../public/services/students.service";



@Component({
  selector: 'app-add-or-edit-senior-student-dialog',
  templateUrl: './add-or-edit-senior-student-dialog.component.html',
  styleUrls: ['./add-or-edit-senior-student-dialog.component.scss']
})
export class AddOrEditSeniorStudentDialogComponent implements OnInit {

  constructor(private _studentsService: StudentsService,
              private _matDialogRef: MatDialogRef<AddOrEditSeniorStudentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }


  closeDialog(wasAStudentAdded: boolean) {
    this._matDialogRef.close(wasAStudentAdded);
  }

  add() {
    this._studentsService.add({}).subscribe(() => {
      this.closeDialog(true);
    });
  }
}
