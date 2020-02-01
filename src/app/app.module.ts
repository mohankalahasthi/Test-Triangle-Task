import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { AuthModule } from './modules/auth/auth.module';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
// tslint:disable-next-line: quotemark
import { FlexLayoutModule } from "@angular/flex-layout";
import { AvailabilityComponent } from './components/availability/availability.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';

import {CommonService} from './services/common.service';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    SkillsComponent,
    AvailabilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
