import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { ConnectionComponent } from './connection/connection.component';
import { TimetableComponent } from './timetable/timetable.component';

@NgModule({
  declarations: [TimetableComponent, ConnectionComponent],
  imports: [CommonModule, HttpClientModule, MatCardModule],
  exports: [TimetableComponent]
})
export class SbbModule {}
