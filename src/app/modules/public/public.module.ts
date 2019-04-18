import {NgModule} from '@angular/core';

import {AddOrEditSeniorStudentDialogComponent} from "./components/shared/dialogs/add-or-edit-senior-student-dialog/add-or-edit-senior-student-dialog.component";
import {ConfirmSeniorStudentDeletionDialogComponent} from "./components/shared/dialogs/confirm-senior-student-deletion-dialog/confirm-senior-student-deletion-dialog.component";

import {PublicRoutingModule} from "./public-routing.module";
import {SharedModule} from "../shared/shared.module";

import {StudentsComponent} from "./components/students/students.component";

import {StudentInfoSidenavComponent} from "./components/shared/sidenavs/student-info-sidenav/student-info-sidenav.component";
import {FilterGridSidenavComponent} from "./components/shared/sidenavs/filter-grid-sidenav/filter-grid-sidenav.component";



@NgModule({
  declarations: [
    StudentsComponent,

    AddOrEditSeniorStudentDialogComponent,
    ConfirmSeniorStudentDeletionDialogComponent,

    StudentInfoSidenavComponent,
    FilterGridSidenavComponent,
  ],
  imports: [
    PublicRoutingModule,
    SharedModule
  ],
  entryComponents: [
    AddOrEditSeniorStudentDialogComponent,
    ConfirmSeniorStudentDeletionDialogComponent
  ],
})
export class PublicModule {
}
