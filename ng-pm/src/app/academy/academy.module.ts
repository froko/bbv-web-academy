import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AcademyBoxComponent } from './academy-box/academy-box.component';
import { AcademyDetailComponent } from './academy-detail/academy-detail.component';
import { AcademyComponent } from './academy.component';

@NgModule({
  declarations: [AcademyComponent, AcademyDetailComponent, AcademyBoxComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: AcademyComponent },
      { path: ':id', component: AcademyDetailComponent }
    ])
  ]
})
export class AcademyModule {}
