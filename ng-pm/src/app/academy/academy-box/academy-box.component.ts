import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from '../academy.model';

@Component({
  selector: 'bbv-academy-box',
  templateUrl: './academy-box.component.html',
  styleUrls: ['./academy-box.component.css']
})
export class AcademyBoxComponent {
  @Input() course: Course;

  @Output() select = new EventEmitter<number>();

  onClick(id: number) {
    this.select.emit(id);
  }
}
