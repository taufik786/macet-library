import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cse-first-year',
  templateUrl: './cse-first-year.component.html',
  styleUrls: ['./cse-first-year.component.css']
})
export class CseFirstYearComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  doc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
}
