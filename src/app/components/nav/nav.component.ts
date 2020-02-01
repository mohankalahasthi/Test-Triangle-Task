import { ChangeDetectorRef, Component, OnDestroy, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { trigger, animate, style, group, query, transition } from '@angular/animations';
// import { MatDialog } from '@angular/material';
import { CommonService } from './../../services/common.service';
import { Router } from '@angular/router';


const routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%', height: '100%' }), {
            optional: true,
        }),
        group([
            // tslint:disable-next-line: max-line-length
            query(':enter', [style({ transform: 'translateX(100%)' }), animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))], { optional: true }),
            // tslint:disable-next-line: max-line-length
            query(':leave', [style({ transform: 'translateX(0%)' }), animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))], { optional: true }),
        ]),
    ]),
]);

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    animations: [routerTransition],
})
export class NavComponent implements OnDestroy {

    constructor(private router: Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        // tslint:disable-next-line: deprecation
        this.mobileQuery.addListener(this._mobileQueryListener);

        // this.acitveLink = Storage.getActiveLink();
        this.acitveLink = this.acitveLink ? this.acitveLink : '0';

        // this.role = Storage.getSessionUser().role;
        // console.log(this.role);

        // this.apexService.dataEvent().subscribe(($event) => {
        //     if (this.sessionUser) {
        //         const id = this.sessionUser.id;
        //         this.sessionUser.id = 0;
        //         setTimeout(() => {
        //             this.sessionUser.id = id;
        //         }, 10);
        //     }
        // });
        // this.apexService.getActiveURL().subscribe((data) => {
        //     console.log(data);
        //     this.getActiveLink(data);
        // });
    }
    mobileQuery: MediaQueryList;

    fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

    // tslint:disable-next-line: variable-name
    private _mobileQueryListener: () => void;

    role: any;

    @Input()
    sessionUser: any;
    @Output()
    outputEvent = new EventEmitter();
    acitveLink: string;

    ngOnDestroy(): void {
        // tslint:disable-next-line: deprecation
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    redirect(link: any) {
        if (link === 'welcome') {
            // Storage.sessionClear();
            this.outputEvent.emit(null);
        } else if (typeof link === 'string' && link.indexOf('/') > 0) {
            this.outputEvent.emit(link);
        } else {
            this.acitveLink = link.id;
            // Storage.setActiveLink(this.acitveLink);
            // this.outputEvent.emit(Props.MENU[link.menu.toUpperCase()].link);
        }
    }

    onLogo() {
        const role: string = null;
        if (role) {
            if (role === 'USER') {
                this.outputEvent.emit('dashboard/home');
            } else {
                this.outputEvent.emit('dashboard/dashboard');
            }
        }
    }

    signout(){
        this.router.navigate(['/auth/signin']);
    }
}

