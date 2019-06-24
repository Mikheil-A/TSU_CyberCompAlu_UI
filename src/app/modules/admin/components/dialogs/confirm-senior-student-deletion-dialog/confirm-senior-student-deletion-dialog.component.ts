import {Component, EventEmitter, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {StudentsService} from "../../../../public/services/students.service";



@Component({
  selector: 'app-confirm-senior-student-deletion-dialog',
  templateUrl: './confirm-senior-student-deletion-dialog.component.html',
  styleUrls: ['./confirm-senior-student-deletion-dialog.component.scss']
})
export class ConfirmSeniorStudentDeletionDialogComponent {
  onDelete = new EventEmitter();


  constructor(private _studentsService: StudentsService,
              private _matDialogRef: MatDialogRef<ConfirmSeniorStudentDeletionDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private _matDialogData: any) {
  }


  // closeDialog(wasAStudentDeleted: boolean) {
  //   this._matDialogRef.close(wasAStudentDeleted);
  // }

  delete() {
    this._studentsService.delete(this._matDialogData).subscribe((res) => {
      this.onDelete.emit();
      // this.closeDialog(true);
      this._matDialogRef.close();
    });
  }
}
