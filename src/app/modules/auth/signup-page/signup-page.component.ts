import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  signupForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  });
  constructor(private router: Router) {}

  ngOnInit() {
    // this.signupForm = new FormGroup({
    //   email: new FormControl(null, [Validators.required, Validators.email]);
    // })
  }
  // emailFormControl = new FormControl("", [
  //   Validators.required,
  //   Validators.email
  // ]);

  signin() {
    this.router.navigate(['/signin']);
  }
  signup() {
    this.router.navigate(['/signup']);
  }
  signUpDetails() {
    console.log(this.signupForm);
    if (this.signupForm.controls.email.value) {
      this.router.navigate(['/signupdetails', this.signupForm.controls.email.value]);

    }
  }
}
