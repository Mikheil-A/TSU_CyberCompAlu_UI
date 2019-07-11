import {Component, EventEmitter, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StudentsService} from "../../../../../public/services/students.service";



@Component({
  selector: 'app-edit-work-experience-dialog',
  templateUrl: './add-or-edit-work-experience-dialog.component.html',
  styleUrls: ['./add-or-edit-work-experience-dialog.component.scss']
})
export class AddOrEditWorkExperienceDialogComponent implements OnInit {
  onSave = new EventEmitter();

  addOrEditTitle: string = 'დამატება';
  private _dataaaa;

  addOrEditWorkExperienceFormGroup: FormGroup;
  private _inputFieldsInitialValues = {
    'companyName': null, // first name
    'jobTitle': null,
    'description': null,
    'startDate': null,
    'endDate': null
  };


  constructor(private _matDialogRef: MatDialogRef<AddOrEditWorkExperienceDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private _receivedData: any,
              private _studentsService: StudentsService) {
    this._dataaaa = this._receivedData;
  }

  ngOnInit() {
    if (this._dataaaa) {
      this._setDialogToEditingMode();
      console.log(this._dataaaa);
    }
    this._initializeForm();
  }


  private _setDialogToEditingMode() {
    this.addOrEditTitle = 'ჩასწორება';

    // Setting clicked record values to input fields
    this._inputFieldsInitialValues.companyName = this._dataaaa.companyName;
    this._inputFieldsInitialValues.jobTitle = this._dataaaa.jobTitle;
    this._inputFieldsInitialValues.description = this._dataaaa.description;
    this._inputFieldsInitialValues.startDate = this._dataaaa.startDate;
    this._inputFieldsInitialValues.endDate = this._dataaaa.endDate;
  }

  private _initializeForm() {
    this.addOrEditWorkExperienceFormGroup = new FormGroup({
      'companyName': new FormControl(this._inputFieldsInitialValues.companyName, Validators.required),
      'jobTitle': new FormControl(this._inputFieldsInitialValues.jobTitle, Validators.required),
      'description': new FormControl(this._inputFieldsInitialValues.description, Validators.required),
      'startDate': new FormControl(this._inputFieldsInitialValues.startDate, Validators.required),
      'endDate': new FormControl(this._inputFieldsInitialValues.endDate, Validators.required),
    });
  }


  submit() {
    console.log(this.addOrEditWorkExperienceFormGroup.value);

    let reqData: object = this.addOrEditWorkExperienceFormGroup.value;
    reqData['id'] = 10;

    this._studentsService.addWorkExperience(reqData).subscribe(() => {
      this.onSave.emit();
    });
  }
}
