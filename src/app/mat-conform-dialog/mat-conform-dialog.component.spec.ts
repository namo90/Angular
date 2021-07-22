import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatConformDialogComponent } from './mat-conform-dialog.component';

describe('MatConformDialogComponent', () => {
  let component: MatConformDialogComponent;
  let fixture: ComponentFixture<MatConformDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatConformDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatConformDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
