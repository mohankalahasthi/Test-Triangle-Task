import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [
  {
    path: "homepage" , component:HomePageComponent
  },

];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class DashboardModule { }
