import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReactiveFormsModule} from '@angular/forms';

import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from './components/footer/footer.component';

import {MatModule} from "../mat/mat.module";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MatModule,

    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule {
}
