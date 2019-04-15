import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/shared/header/header.component';
import {AuthenticationComponent} from './components/authentication/authentication.component';
import {SignInComponent} from './components/authentication/sign-in/sign-in.component';
import {StudentsComponent} from './components/students/students.component';
import {StudentComponent} from './components/student/student.component';

import {StudentInfoSidenavComponent} from './components/shared/sidenavs/student-info-sidenav/student-info-sidenav.component';
import {FilterGridSidenavComponent} from './components/shared/sidenavs/filter-grid-sidenav/filter-grid-sidenav.component';
import {AddOrEditSeniorStudentDialogComponent} from './components/shared/dialogs/add-or-edit-senior-student-dialog/add-or-edit-senior-student-dialog.component';
import {ConfirmSeniorStudentDeletionDialogComponent} from './components/shared/dialogs/confirm-senior-student-deletion-dialog/confirm-senior-student-deletion-dialog.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationComponent,
    SignInComponent,
    StudentsComponent,
    StudentInfoSidenavComponent,
    FilterGridSidenavComponent,
    StudentComponent,
    AddOrEditSeniorStudentDialogComponent,
    ConfirmSeniorStudentDeletionDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule
  ],
  entryComponents: [
    AddOrEditSeniorStudentDialogComponent,
    ConfirmSeniorStudentDeletionDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
