import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthenticationComponent} from "./components/authentication/authentication.component";
import {SignInComponent} from "./components/authentication/sign-in/sign-in.component";
import {StudentsComponent} from "./components/students/students.component";



const routes: Routes = [
  {
    path: '', component: StudentsComponent,
    children: [
      {path: '', redirectTo: 'students', pathMatch: 'full'},
      {path: 'students', component: StudentsComponent}
    ]
  },
  {
    path: 'auth', component: AuthenticationComponent,
    children: [
      {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
      {path: 'sign-in', component: SignInComponent}
    ]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
