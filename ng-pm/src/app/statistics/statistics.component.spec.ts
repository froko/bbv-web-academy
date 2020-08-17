import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { of } from 'rxjs';

import { DurationPipe } from '@ng-pm/shared';

import { StatisticsByDateComponent } from './statistics-by-date/statistics-by-date.component';
import { StatisticsByProjectComponent } from './statistics-by-project/statistics-by-project.component';
import { StatisticsComponent } from './statistics.component';
import { StatisticsService } from './statistics.service';
import { WorktimeDirective } from './worktime.directive';

describe('StatisticsComponent', () => {
  const amountPerDate = { date: '2018-06-01T00:00', amount: 42 };
  const amountPerProject = { project: 'Project 1', amount: 42 };

  const statisticsService = {
    getAllByDate: jest.fn(),
    getAllByProject: jest.fn()
  };

  let component: StatisticsComponent;
  let fixture: ComponentFixture<StatisticsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          StatisticsComponent,
          StatisticsByDateComponent,
          StatisticsByProjectComponent,
          WorktimeDirective,
          DurationPipe
        ],
        providers: [{ provide: StatisticsService, useValue: statisticsService }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    statisticsService.getAllByDate.mockImplementationOnce(() => of(amountPerDate));
    statisticsService.getAllByProject.mockImplementationOnce(() => of(amountPerProject));

    fixture = TestBed.createComponent(StatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
