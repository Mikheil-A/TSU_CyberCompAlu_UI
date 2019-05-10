import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


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
    MatModule,
    NgxSpinnerModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatModule,
    NgxSpinnerModule,

    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule {
}
