import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicLevelList } from './academic-level-list';

describe('AcademicLevelList', () => {
  let component: AcademicLevelList;
  let fixture: ComponentFixture<AcademicLevelList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicLevelList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicLevelList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
