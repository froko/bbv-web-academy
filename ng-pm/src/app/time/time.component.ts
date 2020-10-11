import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Time } from './time.model';
import { TimeService } from './time.service';

@Component({
  selector: 'bbv-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  times$: Observable<Time[]>;

  constructor(private timeService: TimeService) {}

  ngOnInit() {
    this.times$ = this.timeService.getAllTimes();
  }
}
