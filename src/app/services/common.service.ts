import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    // tslint:disable-next-line: quotemark
    providedIn: "root",
})
export class CommonService {

    // tslint:disable-next-line: variable-name
    private _sessionUserSubject: BehaviorSubject<any> = new BehaviorSubject(null);
    constructor(private router: Router, private route: ActivatedRoute) {}

    sessionUserEmit(sessionUser: any) {
        this._sessionUserSubject.next(sessionUser);
    }

    sessionUserEvent(): Observable<any> {
        return this._sessionUserSubject.asObservable();
    }

}
