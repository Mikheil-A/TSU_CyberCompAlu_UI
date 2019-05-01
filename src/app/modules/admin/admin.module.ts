import {NgModule} from '@angular/core';
import {AdminRoutingModule} from "./admin-routing.module";

import {StudentComponent} from "./components/student/student.component";

import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    AdminRoutingModule,

    SharedModule
  ]
})
export class AdminModule {
}
