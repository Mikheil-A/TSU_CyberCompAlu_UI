import {NgModule} from '@angular/core';
import {AdminRoutingModule} from "./admin-routing.module";

import {StudentComponent} from "./components/student/student.component";



@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    AdminRoutingModule
  ]
})
export class AdminModule {
}
