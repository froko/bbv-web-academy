import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuardService, authInterceptor } from '@ng-pm/auth';
import { SharedModule } from '@ng-pm/shared';

import { StatisticsByDateComponent } from './statistics-by-date/statistics-by-date.component';
import { StatisticsByProjectComponent } from './statistics-by-project/statistics-by-project.component';
import { StatisticsComponent } from './statistics.component';
import { StatisticsService } from './statistics.service';
import { WorktimeDirective } from './worktime.directive';

@NgModule({
  declarations: [StatisticsComponent, StatisticsByDateComponent, StatisticsByProjectComponent, WorktimeDirective],
  imports: [
    SharedModule,
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: StatisticsComponent, canActivate: [AuthGuardService] }])
  ],
  providers: [StatisticsService, authInterceptor]
})
export class StatisticsModule {}
