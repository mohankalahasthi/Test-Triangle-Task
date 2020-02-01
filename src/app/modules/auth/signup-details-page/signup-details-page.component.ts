import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CommonService} from './../../../services/common.service'

@Component({
  selector: 'app-signup-details-page',
  templateUrl: './signup-details-page.component.html',
  styleUrls: ['./signup-details-page.component.scss']
})
export class SignupDetailsPageComponent implements OnInit {
  signupForm: FormGroup;
  isUserLogged: any;
  constructor(private router: Router, private commonService: CommonService) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
        username: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required]),
        confirmPassword: new FormControl(null, [Validators.required]),
        displayName: new FormControl(null, [Validators.required]),
        firstName: new FormControl(null, [Validators.required]),
        lastName: new FormControl(null, [Validators.required]),
        nickName: new FormControl(null, [Validators.required]),
        website: new FormControl(null, [Validators.required]),
        bioDescription: new FormControl(null, [Validators.required]),
        jabber: new FormControl(null, [Validators.required]),
        aolIm: new FormControl(null, [Validators.required]),
        yahooIm: new FormControl(null, [Validators.required]),

    });
  }

  submit() {
    console.log(this.signupForm);
    this.router.navigate(['/dashboard/homepage']);
    sessionStorage.setItem('isUserLogged', 'true');
    console.log(sessionStorage.getItem('isUserLogged'));
    this.commonService.sessionUserEmit(sessionStorage.getItem('isUserLogged'));
  }
}
