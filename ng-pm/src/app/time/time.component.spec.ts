import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';

import { DurationPipe } from '@ng-pm/shared';

import { TimeComponent } from './time.component';
import { Time } from './time.model';
import { TimeService } from './time.service';

describe('TimeComponent', () => {
  const times = [
    new Time().fromValues(123, '2019-06-01T00:00', 'Project 1', 'Cost Type 2', 42, 'Hard work'),
    new Time().fromValues(124, '2019-06-01T00:00', 'Project 2', 'Cost Type 2', 24, 'Hard work')
  ];

  const timeService = {
    getAllTimes: jest.fn()
  };

  let component: TimeComponent;
  let fixture: ComponentFixture<TimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TimeComponent, DurationPipe],
      providers: [{ provide: TimeService, useValue: timeService }]
    });
  });

  beforeEach(() => {
    timeService.getAllTimes.mockImplementationOnce(() => of(times));

    fixture = TestBed.createComponent(TimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
