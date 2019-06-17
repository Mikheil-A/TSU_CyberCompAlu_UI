import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {StudentsService} from "../../../../public/services/students.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-add-or-edit-senior-student-dialog',
  templateUrl: './add-or-edit-senior-student-dialog.component.html',
  styleUrls: ['./add-or-edit-senior-student-dialog.component.scss']
})
export class AddOrEditSeniorStudentDialogComponent implements OnInit {
  addOrEditTitle: string = 'დამატება';
  private _clickedStudentData; // this is assigned to null when dialog is set to adding mode


  formGroup: FormGroup;
  private _inputFieldsInitialValues = { // this is default for dialog adding mode
    'firstName': null,
    'lastName': null,
    'address': null
  };

  constructor(private _studentsService: StudentsService,
              private _matDialogRef: MatDialogRef<AddOrEditSeniorStudentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private _receivedData: any) {
    this._clickedStudentData = this._receivedData;
  }

  ngOnInit() {
    if (this._clickedStudentData) {
      this._setDialogToEditingMode();
    }
    this._initializeForm();
  }


  private _setDialogToEditingMode() {
    this.addOrEditTitle = 'ჩასწორება';

    // Setting clicked record values to input fields
    this._inputFieldsInitialValues.firstName = this._clickedStudentData.firstName;
    this._inputFieldsInitialValues.lastName = this._clickedStudentData.lastName;
    this._inputFieldsInitialValues.address = this._clickedStudentData.address;
  }

  private _initializeForm() {
    this.formGroup = new FormGroup({
      'firstName': new FormControl(this._inputFieldsInitialValues.firstName, Validators.required),
      'lastName': new FormControl(this._inputFieldsInitialValues.lastName, Validators.required),
      'address': new FormControl(this._inputFieldsInitialValues.address, Validators.required)
    });
  }

  closeDialog(wasAStudentAdded: boolean) {
    this._matDialogRef.close(wasAStudentAdded);
  }

  save() {
    if (!this.formGroup.invalid) {
      this._studentsService.addOrUpdate({}).subscribe(() => {
        this.closeDialog(true);
      });
    }
  }
}
