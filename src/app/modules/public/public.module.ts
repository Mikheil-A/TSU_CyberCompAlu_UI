import {NgModule} from '@angular/core';

import {AddOrEditSeniorStudentDialogComponent} from "../admin/components/dialogs/add-or-edit-senior-student-dialog/add-or-edit-senior-student-dialog.component";

import {PublicRoutingModule} from "./public-routing.module";
import {SharedModule} from "../shared/shared.module";

import {StudentsComponent} from "./components/students/students.component";

import {StudentInfoSidenavComponent} from "../admin/components/sidenavs/student-info-sidenav/student-info-sidenav.component";
import {FilterGridSidenavComponent} from "./components/sidenavs/filter-grid-sidenav/filter-grid-sidenav.component";

// mocks
import {StudentsMock} from "./mocks/students.mock";

// services
import {StudentsService} from "./services/students.service";



@NgModule({
  declarations: [
    StudentsComponent,

    AddOrEditSeniorStudentDialogComponent,
    StudentInfoSidenavComponent,
    FilterGridSidenavComponent
  ],
  providers: [
    // mocks
    StudentsMock,

    // services
    StudentsService
  ],
  imports: [
    PublicRoutingModule,
    SharedModule
  ],
  entryComponents: [
    AddOrEditSeniorStudentDialogComponent
  ],
})
export class PublicModule {
}
