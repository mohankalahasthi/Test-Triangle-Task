import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { SigninPageComponent } from "./signin-page/signin-page.component";
import { SignupPageComponent } from "./signup-page/signup-page.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./../material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SignupDetailsPageComponent } from "./signup-details-page/signup-details-page.component";

const routes: Routes = [
  { 
    path: "", 
    component: SignupPageComponent 
  },
  { 
    path: "signin", 
    component: SigninPageComponent 
  },
  {
    path: "signup",
    component: SignupPageComponent
  },
  { 
    path: "signupdetails/:id", 
    component: SignupDetailsPageComponent 
  }
];

@NgModule({
  declarations: [
    SigninPageComponent,
    SignupPageComponent,
    SignupDetailsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class AuthModule {}
