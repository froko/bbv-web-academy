import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ENV_PROVIDERS } from '../environments/environment';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [BrowserModule],
  providers: [ENV_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
