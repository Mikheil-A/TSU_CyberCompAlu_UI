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
  private _workExperienceToEdit;

  addOrEditWorkExperienceFormGroup: FormGroup;
  private _inputFieldsInitialValues = {
    'company_name': null, // first name
    // 'jobTitle': null, // TODO ?????????
    'description': null,
    'start_date': null,
    'end_date': null
  };


  constructor(private _matDialogRef: MatDialogRef<AddOrEditWorkExperienceDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private _receivedData: any,
              private _studentsService: StudentsService) {
    this._workExperienceToEdit = this._receivedData;
  }

  ngOnInit() {
    if (this._workExperienceToEdit) {
      this._setDialogToEditingMode();
    }
    this._initializeForm();
  }


  private _setDialogToEditingMode() {
    this.addOrEditTitle = 'ჩასწორება';

    // Setting clicked record values to input fields
    this._inputFieldsInitialValues.company_name = this._workExperienceToEdit.company_name;
    // this._inputFieldsInitialValues.jobTitle = this._dataaaa.jobTitle; // FIXME
    this._inputFieldsInitialValues.description = this._workExperienceToEdit.description;
    this._inputFieldsInitialValues.start_date = this._workExperienceToEdit.start_date;
    this._inputFieldsInitialValues.end_date = this._workExperienceToEdit.end_date;
  }

  private _initializeForm() {
    this.addOrEditWorkExperienceFormGroup = new FormGroup({
      'company_name': new FormControl(this._inputFieldsInitialValues.company_name, Validators.required),
      // 'jobTitle': new FormControl(this._inputFieldsInitialValues.jobTitle, Validators.required), // FIXME back-end api
      'description': new FormControl(this._inputFieldsInitialValues.description, Validators.required),
      'start_date': new FormControl(this._inputFieldsInitialValues.start_date, Validators.required),
      'end_date': new FormControl(this._inputFieldsInitialValues.end_date, Validators.required),
    });
  }


  submit() {
    // if the dialog is in editing mode, add id to the work experience which we want to edit
    if (this._workExperienceToEdit) {
      this.addOrEditWorkExperienceFormGroup.value['id'] = this._workExperienceToEdit.id;
    }

    let reqData: object = {
      user: {
        'id': 16, // FIXME
        'user_portfolios_attributes': [this.addOrEditWorkExperienceFormGroup.value]
      }
    };

    this._studentsService.addOrEditOrDeleteWorkExperience(reqData).subscribe(() => {
      this._matDialogRef.close();
      this.onSave.emit();
    });
  }
}
