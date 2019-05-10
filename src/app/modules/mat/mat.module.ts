import {NgModule} from '@angular/core';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule
  ],
  exports:[
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class MatModule {
}