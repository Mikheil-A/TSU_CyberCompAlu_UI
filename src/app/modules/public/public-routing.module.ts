import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {StudentsComponent} from "./components/students/students.component";
import {AuthGuard} from "../auth/guards/auth.guard";



const routes: Routes = [
  {path: 'students', component: StudentsComponent, canActivateChild: [AuthGuard]}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {
}
