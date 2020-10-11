import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Course } from '../academy.model';

import { AcademyBoxComponent } from './academy-box.component';

describe('AcademyBoxComponent', () => {
  const course = {
    id: 1,
    title: 'My course',
    abstract: 'My abstract',
    category: 'My category'
  };

  let component: AcademyBoxComponent;
  let fixture: ComponentFixture<AcademyBoxComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AcademyBoxComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyBoxComponent);
    component = fixture.componentInstance;
    component.course = course as Course;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
