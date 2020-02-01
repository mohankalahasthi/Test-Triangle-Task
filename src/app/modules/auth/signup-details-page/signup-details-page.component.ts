import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FnParam } from '@angular/compiler/src/output/output_ast';
import { Router } from "@angular/router";


@Component({
  selector: "app-signup-details-page",
  templateUrl: "./signup-details-page.component.html",
  styleUrls: ["./signup-details-page.component.scss"]
})
export class SignupDetailsPageComponent implements OnInit {
  signupForm: FormGroup;
  loginNav:any;
  constructor(private router: Router) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
        username: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required]),
        confirmPassword:new FormControl(null,[Validators.required]),
        displayName: new FormControl(null,[Validators.required]),
        firstName: new FormControl(null,[Validators.required]),
        lastName: new FormControl(null,[Validators.required]),
        nickName: new FormControl(null,[Validators.required]),
        website: new FormControl(null,[Validators.required]),
        bioDescription: new FormControl(null,[Validators.required]),
        jabber: new FormControl(null,[Validators.required]),
        aolIm: new FormControl(null,[Validators.required]),
        yahooIm: new FormControl(null,[Validators.required]),
        
    });
  }

  submit() {
    console.log(this.signupForm);
    this.router.navigate(["/dashboard/homepage"]);
    this.loginNav = sessionStorage.setItem('userIsLogged', 'true');
    let userKey = sessionStorage.getItem('userIsLogged')
    console.log(userKey);
  }
}
