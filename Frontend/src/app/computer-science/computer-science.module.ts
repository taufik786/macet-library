import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComputerScienceRoutingModule } from './computer-science-routing.module';
import { CseFirstYearComponent } from './cse-first-year/cse-first-year.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ComputerScienceComponent } from './computer-science.component';


@NgModule({
  declarations: [
    CseFirstYearComponent,
    ComputerScienceComponent
  ],
  imports: [
    CommonModule,
    ComputerScienceRoutingModule,
    PdfViewerModule
  ],
  exports: [
    ComputerScienceComponent,
    CseFirstYearComponent
  ]
})
export class ComputerScienceModule { }
