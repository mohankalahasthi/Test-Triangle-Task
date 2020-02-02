import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CommonService } from "./.././../../services/common.service";
@Component({
  selector: "app-signin-page",
  templateUrl: "./signin-page.component.html",
  styleUrls: ["./signin-page.component.scss"]
})
export class SigninPageComponent implements OnInit {
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);
  constructor(private router: Router, private commonService: CommonService) {
    sessionStorage.clear();
    sessionStorage.removeItem("isUserLogged");
    this.commonService.sessionUserEmit(null);
  }

  ngOnInit() {}
  
  signup() {
    this.router.navigate(["/signup"]);
  }
  logged(){
    this.router.navigate(['/dashboard/homepage']);
    sessionStorage.setItem('isUserLogged', 'true');
    this.commonService.sessionUserEmit(sessionStorage.getItem('isUserLogged'));
  }
}
