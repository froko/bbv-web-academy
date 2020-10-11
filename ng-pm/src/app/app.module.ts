import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { JwtModule } from '@auth0/angular-jwt';

import { AuthModule, jwtModuleOptions } from '@ng-pm/auth';

import { ENV_PROVIDERS } from '../environments/environment';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'time', loadChildren: () => import('./time/time.module').then((m) => m.TimeModule) },
  { path: 'academy', loadChildren: () => import('./academy/academy.module').then((m) => m.AcademyModule) },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [AppComponent, NavComponent, FooterComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    JwtModule.forRoot(jwtModuleOptions),
    AuthModule
  ],
  providers: [ENV_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
