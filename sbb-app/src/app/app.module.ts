import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ENV_PROVIDERS } from '../environments/environment';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [ENV_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
