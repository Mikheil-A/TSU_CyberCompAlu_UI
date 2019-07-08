import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {AddOrEditWorkExperienceDialogComponent} from "./add-or-edit-work-experience-dialog/add-or-edit-work-experience-dialog.component";



@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  tempObj: object[] = [
    {'job_title': 'job title1', 'job_desc': 'job desc1'},
    {'job_title': 'job title2', 'job_desc': 'job desc2'},
    {'job_title': 'job title3', 'job_desc': 'job desc3'}
  ];


  constructor(private _matDialog: MatDialog) {
  }

  ngOnInit() {
  }


  openAddOrEditWorkExperienceDialog() {
    const dialogRef = this._matDialog.open(AddOrEditWorkExperienceDialogComponent, {
      'data': 'test'
    });
  }
}
