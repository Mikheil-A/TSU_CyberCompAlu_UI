import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {StudentComponent} from "./components/student/student.component";



const routes: Routes = [
  {path: 'student/:pid', component: StudentComponent}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
