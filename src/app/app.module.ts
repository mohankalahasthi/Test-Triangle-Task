import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupPageComponent } from './modules/auth/signup-page/signup-page.component';
import { SigninPageComponent } from './modules/auth/signin-page/signin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    SigninPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
