import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DurationPipe } from '../../shared/duration.pipe';
import { WorktimeDirective } from '../worktime.directive';

import { StatisticsByDateComponent } from './statistics-by-date.component';

describe('StatisticsByDateComponent', () => {
  let component: StatisticsByDateComponent;
  let fixture: ComponentFixture<StatisticsByDateComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [StatisticsByDateComponent, WorktimeDirective, DurationPipe]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
