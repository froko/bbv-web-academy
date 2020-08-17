import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TimeByDate, TimeByProject } from './statistics.model';
import { StatisticsService } from './statistics.service';

@Component({
  selector: 'bbv-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit, OnDestroy {
  totalTime = 0;
  timesByDate: TimeByDate[] = [];
  timesByProject: TimeByProject[] = [];

  private destroy$ = new Subject<void>();

  constructor(private statisticsServie: StatisticsService) {}

  ngOnInit() {
    this.statisticsServie
      .getAllByDate()
      .pipe(takeUntil(this.destroy$))
      .subscribe((d) => {
        this.totalTime += d.amount;
        this.timesByDate.push(d);
      });

    this.statisticsServie
      .getAllByProject()
      .pipe(takeUntil(this.destroy$))
      .subscribe((p) => {
        this.timesByProject.push(p);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
