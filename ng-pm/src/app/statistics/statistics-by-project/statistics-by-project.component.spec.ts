import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DurationPipe } from '../../shared/duration.pipe';
import { WorktimeDirective } from '../worktime.directive';

import { StatisticsByProjectComponent } from './statistics-by-project.component';

describe('StatisticsByProjectComponent', () => {
  let component: StatisticsByProjectComponent;
  let fixture: ComponentFixture<StatisticsByProjectComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [StatisticsByProjectComponent, WorktimeDirective, DurationPipe]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsByProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
