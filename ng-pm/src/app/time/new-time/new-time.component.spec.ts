import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { of } from 'rxjs';

import { TimeService } from '../time.service';

import { NewTimeComponent } from './new-time.component';

describe('NewTimeComponent', () => {
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
    getAllProjects: jest.fn()
  };

  const router = {
    navigate: jest.fn()
  };

  let component: NewTimeComponent;
  let fixture: ComponentFixture<NewTimeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ReactiveFormsModule],
        declarations: [NewTimeComponent],
        providers: [
          { provide: TimeService, useValue: timeService },
          { provide: Router, useValue: router }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    timeService.getAllProjects.mockImplementationOnce(() => of(projects));

    fixture = TestBed.createComponent(NewTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
