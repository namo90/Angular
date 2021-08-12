import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelreadeComponent } from './excelreade.component';

describe('ExcelreadeComponent', () => {
  let component: ExcelreadeComponent;
  let fixture: ComponentFixture<ExcelreadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelreadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelreadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
