import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { Course } from './academy.model';
import { AcademyService } from './academy.service';

@Component({
  selector: 'bbv-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.css']
})
export class AcademyComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(private service: AcademyService, private router: Router) {}

  ngOnInit() {
    this.courses$ = this.service.getAll();
  }

  navigateToCourseDetail(courseId: number) {
    this.router.navigate(['academy', courseId]);
  }
}
