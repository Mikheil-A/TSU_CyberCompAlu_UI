import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';


import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from "./interceptors/token.interceptor";


import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from './components/footer/footer.component';

import {MatModule} from "../mat/mat.module";
import {NgxSpinnerModule} from "ngx-spinner";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    MatModule,
    NgxSpinnerModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    MatModule,
    NgxSpinnerModule,

    HeaderComponent,
    FooterComponent
  ],
  providers: [
    // Passing authorization token into every HttpClient request vie HttpOptions headers
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
  ]
})
export class SharedModule {
}
