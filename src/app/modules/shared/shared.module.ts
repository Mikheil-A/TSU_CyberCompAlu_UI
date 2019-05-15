import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


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
  ]
})
export class SharedModule {
}
