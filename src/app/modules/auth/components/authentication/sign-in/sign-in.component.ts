import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInFormGroup: FormGroup;

  isUsernameOrPasswordIsIncorrectMsgDisplayed: boolean = false;

  constructor() {
  }


  ngOnInit() {
    this._initializeForm();
  }


  private _initializeForm() {
    this.signInFormGroup = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  submit() {
    if (!this.signInFormGroup.invalid) {
      console.log('form is valid');
    }
  }

}
