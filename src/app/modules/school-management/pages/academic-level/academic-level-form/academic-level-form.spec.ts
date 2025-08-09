import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicLevelForm } from './academic-level-form';

describe('AcademicLevelForm', () => {
  let component: AcademicLevelForm;
  let fixture: ComponentFixture<AcademicLevelForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicLevelForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicLevelForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
