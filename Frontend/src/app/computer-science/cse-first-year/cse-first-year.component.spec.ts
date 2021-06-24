import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CseFirstYearComponent } from './cse-first-year.component';

describe('CseFirstYearComponent', () => {
  let component: CseFirstYearComponent;
  let fixture: ComponentFixture<CseFirstYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CseFirstYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CseFirstYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
