import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputerScienceComponent } from './computer-science.component';
import { CseFirstYearComponent } from './cse-first-year/cse-first-year.component';

const routes: Routes = [
  { path: '', component: ComputerScienceComponent },
  { path: 'math', component: CseFirstYearComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComputerScienceRoutingModule { }
