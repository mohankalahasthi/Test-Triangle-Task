import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "auth/signup" },
  {
    path: "auth",
    loadChildren: "./modules/auth/auth.module#AuthModule",
  },
  {
    path: "dashboard",
    loadChildren: "./modules/dashboard/dashboard.module#DashboardModule",
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
