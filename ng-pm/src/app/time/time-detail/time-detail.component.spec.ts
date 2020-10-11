import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { of } from 'rxjs';

import { Time } from '../time.model';
import { TimeService } from '../time.service';

import { TimeDetailComponent } from './time-detail.component';

describe('TimeDetailComponent', () => {
  const time = new Time().fromValues(123, '2018-06-01T00:00', 'Project 1', 'Cost Type 2', 42, 'hard work');

  const projects = [
    {
      id: 1,
      name: 'Project 1',
      costTypes: [
        { id: 1, name: 'Cost Type 1' },
        { id: 2, name: 'Cost Type 2' }
      ]
    }
  ];

  const timeService = {
    getTime: jest.fn(),
    getAllProjects: jest.fn()
  };

  const router = {
    navigate: jest.fn()
  };

  let component: TimeDetailComponent;
  let fixture: ComponentFixture<TimeDetailComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ReactiveFormsModule],
        declarations: [TimeDetailComponent],
        providers: [
          { provide: TimeService, useValue: timeService },
          { provide: Router, useValue: router },
          {
            provide: ActivatedRoute,
            useValue: {
              paramMap: of({ id: 123 })
            }
          }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    timeService.getTime.mockImplementationOnce(() => of(time));
    timeService.getAllProjects.mockImplementationOnce(() => of(projects));

    fixture = TestBed.createComponent(TimeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
