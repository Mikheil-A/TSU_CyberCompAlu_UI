import {NgModule} from '@angular/core';
import {AdminRoutingModule} from "./admin-routing.module";

// components
import {StudentComponent} from "./components/student/student.component";

// modules
import {SharedModule} from "../shared/shared.module";

// guards
import {AdminGuard} from "./guards/admin.guard";



@NgModule({
  declarations: [
    StudentComponent
  ],
  imports: [
    AdminRoutingModule,

    SharedModule
  ],
  providers: [
    // guards
    AdminGuard
  ]
})
export class AdminModule {
}
