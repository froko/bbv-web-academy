import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';

import { AcademyService } from '../academy.service';

import { AcademyDetailComponent } from './academy-detail.component';

describe('AcademyDetailComponent', () => {
  const course = { id: 1, title: 'Course Title' };

  const academyService = {
    getCourse: jest.fn()
  };

  let component: AcademyDetailComponent;
  let fixture: ComponentFixture<AcademyDetailComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [AcademyDetailComponent],
        providers: [{ provide: AcademyService, useValue: academyService }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    academyService.getCourse.mockImplementationOnce(() => of(course));

    fixture = TestBed.createComponent(AcademyDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(
    'should expose course from service',
    waitForAsync(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        component.course$.subscribe((c) => expect(c.title).toBe('Course Title'));
      });
    })
  );

  it(
    'should display course',
    waitForAsync(() => {
      fixture.whenStable().then(() => {
        fixture.detectChanges();

        const courseElement = fixture.nativeElement.querySelector('h2');

        expect(courseElement.textContent).toBe('Course Title');
        expect(academyService.getCourse).toHaveBeenCalled();
      });
    })
  );
});
