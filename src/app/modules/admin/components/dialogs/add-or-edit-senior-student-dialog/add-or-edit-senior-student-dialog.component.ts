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
    'name': null,
    'last_name': null,
    'email': null
  };

  constructor(private _studentsService: StudentsService,
              private _matDialogRef: MatDialogRef<AddOrEditSeniorStudentDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private _receivedData: any) {
    this._clickedStudentData = this._receivedData;
  }

  ngOnInit() {
    if (this._clickedStudentData) {
      // this._setDialogToEditingMode();
    }
    this._initializeForm();
  }


  private _setDialogToEditingMode() {
    this.addOrEditTitle = 'ჩასწორება';

    // Setting clicked record values to input fields
    // this._inputFieldsInitialValues.name = this._clickedStudentData.firstName;
    // this._inputFieldsInitialValues.lastName = this._clickedStudentData.lastName;
    // this._inputFieldsInitialValues.address = this._clickedStudentData.address;
  }

  private _initializeForm() {
    this.formGroup = new FormGroup({
      // 'name': new FormControl(this._inputFieldsInitialValues.name, Validators.required),
      // 'last_name': new FormControl(this._inputFieldsInitialValues.last_name, Validators.required),
      // 'email': new FormControl(this._inputFieldsInitialValues.email, Validators.required),
      // 'birth_date': new FormControl(this._inputFieldsInitialValues.birth_date, Validators.required),
      // 'graduate_date': new FormControl(this._inputFieldsInitialValues.graduate_date, Validators.required),
      // 'profile_id': new FormControl(this._inputFieldsInitialValues.profile_id, Validators.required), // 1 admin, 2 - student
    });
  }

  closeDialog(wasAStudentAdded: boolean) {
    this._matDialogRef.close(wasAStudentAdded);
  }

  save() {
    const tempRequestData = {
      'username': 'testusernae',
      'name': 'testname',
      'last_name': 'test lat name',
      'email': 'testafwfwfwemail@gmail.com',
      'birth_date': new Date(),
      'apply_date': new Date(),
      'graduate_date': new Date(),
      'profile_id': 2,
      'employed': true
    };
    this._studentsService.addOrUpdate({
      "email":"dunkman032@gmail.com",
      "name": "zuri123",
      "last_name": "123",
      "username":"zuria12",
      "birth_date": "25-01-1997",
      "profile_id": 1
    }).subscribe((res) => {
      console.log('damateba', res);
      this.closeDialog(true);
    });

    if (!this.formGroup.invalid) {
    }
  }
}
