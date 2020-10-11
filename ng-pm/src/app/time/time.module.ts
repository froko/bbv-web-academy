import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthGuardService, authInterceptor } from '@ng-pm/auth';
import { SharedModule } from '@ng-pm/shared';

import { NewTimeComponent } from './new-time/new-time.component';
import { TimeDetailComponent } from './time-detail/time-detail.component';
import { TimeComponent } from './time.component';
import { TimeService } from './time.service';

@NgModule({
  declarations: [TimeComponent, TimeDetailComponent, NewTimeComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: TimeComponent, canActivate: [AuthGuardService] },
      { path: 'new', component: NewTimeComponent, canActivate: [AuthGuardService] },
      { path: ':id', component: TimeDetailComponent, canActivate: [AuthGuardService] }
    ])
  ],
  providers: [TimeService, authInterceptor]
})
export class TimeModule {}
