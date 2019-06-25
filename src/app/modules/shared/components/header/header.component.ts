import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";
import {StudentsService} from "../../../public/services/students.service";
import {MatDialog} from "@angular/material";
import {ChangePasswordDialogComponent} from "./change-password-dialog/change-password-dialog.component";
import {MatSnackBarService} from "../../services/mat-snack-bar.service";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string = '';


  constructor(private _authService: AuthService,
              private _studentsService: StudentsService,
              private _matDialog: MatDialog,
              private _matSnackBarService: MatSnackBarService) {
  }

  ngOnInit() {
    if (this._authService.isLoggedIn) {
      this._getLoggedInUserData();
    }
  }


  private _getLoggedInUserData() {
    // get user data by id
    this._studentsService.getStudent(localStorage.getItem('user_id')).subscribe(res => {
      this._authService.saveUserSessionData(undefined, undefined, res['data']);
      this.username = JSON.parse(localStorage.getItem('userData')).username;
    });
  }

  logout() {
    this._authService.logout();
  }


  openChangePasswordDialog() {
    const dialogRef = this._matDialog.open(ChangePasswordDialogComponent);

    const passwordChangeSubscription = dialogRef.componentInstance.onPasswordChange.subscribe(() => {
      this._matSnackBarService.openSnackBar('პაროლი წარმატებით შეიცვალა');
    });
    dialogRef.afterClosed().subscribe(() => {
      passwordChangeSubscription.unsubscribe();
    })
  }
}
