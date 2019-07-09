import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {AddOrEditWorkExperienceDialogComponent} from "./add-or-edit-work-experience-dialog/add-or-edit-work-experience-dialog.component";
import {MatSnackBarService} from "../../../../shared/services/mat-snack-bar.service";



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


  constructor(private _matDialog: MatDialog,
              private _matSnackBarService: MatSnackBarService) {
  }

  ngOnInit() {
  }


  openAddOrEditWorkExperienceDialog(data) {
    const dialogRef = this._matDialog.open(AddOrEditWorkExperienceDialogComponent, {
      'data': data
    });

    const saveSubscription = dialogRef.componentInstance.onSave.subscribe(() => {
      // TODO update data
      this._matSnackBarService.openSnackBar('სამუშაო გამოცდილება შეინახა');
    });

    dialogRef.afterClosed().subscribe(() => {
      saveSubscription.unsubscribe();
    })
  }
}
