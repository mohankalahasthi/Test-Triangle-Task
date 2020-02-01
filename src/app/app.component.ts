import { Component, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-triangle-task';
  sessionUser: any = null;

  // tslint:disable-next-line: one-line
  constructor(private commonService: CommonService) {
    this.commonService
      .sessionUserEvent()
      .subscribe($event => {
        this.sessionUserEvent($event);
      });
  }

  ngOnInit(): void {
    const sessionUser = sessionStorage.getItem('isUserLogged');
    this.commonService.sessionUserEmit(sessionUser);
  }

  sessionUserEvent($event: any) {
    this.sessionUser = $event;
  }

  outputEvent($event: any) {
    if ($event) {
        // this.appService.navigate($event, []);
    } else {
        this.commonService.sessionUserEmit(null);
        // this.appService.navigate("", []);
    }
}
}
