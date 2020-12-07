import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { FlatConnection } from '../sbb.model';
import { SbbService } from '../sbb.service';

@Component({
  selector: 'sbb-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
  connections$: Observable<FlatConnection[]>;

  constructor(private service: SbbService) {}

  ngOnInit() {
    this.connections$ = this.service.getConnections('luzern', 'zürich');
  }

  onSelect(connection: FlatConnection) {
    console.log(connection);
  }
}
