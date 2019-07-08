import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";



@Component({
  selector: 'app-edit-work-experience-dialog',
  templateUrl: './add-or-edit-work-experience-dialog.component.html',
  styleUrls: ['./add-or-edit-work-experience-dialog.component.scss']
})
export class AddOrEditWorkExperienceDialogComponent implements OnInit {

  constructor(private _matDialogRef: MatDialogRef<AddOrEditWorkExperienceDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private _receivedData: any) {
  }

  ngOnInit() {
  }

}
