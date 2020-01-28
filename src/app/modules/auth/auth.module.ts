import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

const routes: Routes = [
  { path: "", component: SigninPageComponent },
  { path: "signin", component: SigninPageComponent },
  { 
    path: "signup", 
    component: SignupPageComponent,
    children : [
      { path : 'signupdetails' , component : SignupPageComponent}]
  },

]

@NgModule({
  declarations: [SigninPageComponent,SignupPageComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
