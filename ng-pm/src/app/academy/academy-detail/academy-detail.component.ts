import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Course } from '../academy.model';
import { AcademyService } from '../academy.service';

@Component({
  selector: 'bbv-academy-detail',
  templateUrl: './academy-detail.component.html',
  styleUrls: ['./academy-detail.component.css']
})
export class AcademyDetailComponent implements OnInit {
  public course$: Observable<Course>;

  constructor(private service: AcademyService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.course$ = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.service.getCourse(+params.get('id'))));
  }

  goBack() {
    this.router.navigate(['/academy']);
  }
}
