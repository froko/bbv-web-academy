import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Subscription, zip } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CostType, Project, Time } from '../time.model';
import { TimeService } from '../time.service';

@Component({
  selector: 'bbv-time-detail',
  templateUrl: './time-detail.component.html',
  styleUrls: ['./time-detail.component.css']
})
export class TimeDetailComponent implements OnInit, OnDestroy {
  timeForm: FormGroup;
  projects: Project[];
  costTypes: CostType[];

  private subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private timeService: TimeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.timeForm = this.formBuilder.group({
      id: new FormControl(0),
      date: new FormControl(''),
      project: new FormControl(''),
      costType: new FormControl(''),
      amount: new FormControl(0, Validators.required),
      comment: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    const getTimeById = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.timeService.getTime(+params.get('id')))
    );

    const getProjects = this.timeService.getAllProjects();

    this.subscription = zip(getTimeById, getProjects).subscribe((value) => {
      this.loadForm(value[0]);
      this.loadProjectsAndCostTypes(value[1]);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSubmit() {
    const time = new Time().fromValues(
      this.timeForm.value.id,
      this.timeForm.value.date,
      this.timeForm.value.project,
      this.timeForm.value.costType,
      this.timeForm.value.amount,
      this.timeForm.value.comment
    );

    this.timeService.updateTime(time).subscribe(() => {
      this.router.navigate(['/time']);
    });
  }

  onSelect(name: string) {
    this.costTypes = this.projects.find((p) => p.name === name).costTypes;
  }

  private loadForm(time: Time) {
    this.timeForm.patchValue({
      id: time.id,
      date: time.date.substring(0, 10),
      project: time.project,
      costType: time.costType,
      amount: time.amount,
      comment: time.comment
    });
  }

  private loadProjectsAndCostTypes(projects: Project[]) {
    this.projects = projects;
    this.onSelect(projects[0].name);
  }
}
