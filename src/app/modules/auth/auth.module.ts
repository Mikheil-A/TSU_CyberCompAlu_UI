import {NgModule} from '@angular/core';

import {AuthRoutingModule} from "./auth-routing.module";
import {SharedModule} from "../shared/shared.module";

import {AuthenticationComponent} from "./components/authentication/authentication.component";
import {SignInComponent} from "./components/authentication/sign-in/sign-in.component";



@NgModule({
  declarations: [
    AuthenticationComponent,
    SignInComponent,
  ],
  imports: [
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule {
}
