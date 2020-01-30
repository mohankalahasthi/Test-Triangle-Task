import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-signup-details-page',
  templateUrl: './signup-details-page.component.html',
  styleUrls: ['./signup-details-page.component.scss']
})
export class SignupDetailsPageComponent implements OnInit {
  email: any;
  routeSubscription: any;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.routeSubscription = this.activatedRoute.params.subscribe((value: any) => {
this.email = value.id;
    })
    this.serviceCall();
  }


  serviceCall(){
console.log(this.routeSubscription)
  }

}
