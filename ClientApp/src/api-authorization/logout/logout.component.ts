import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
    public message = new BehaviorSubject<string>(null);

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        const action = this.activatedRoute.snapshot.url[1];
        switch (action.path) {
            case 'logout':
                if (!!window.history.state.local) {
                    this.logout(this.getReturnUrl());
                } else {
                    this.message.next('The logout was not initiated from within the page.');
                }
                break;
            case 'logout-callback':
                this.processLogoutCallback();
                break;
            case 'logged-out':
                this.message.next('You successfully logged out!');
                break;
            default:
                throw new Error(`Invalid action '${action}'`);
        }
    }

    private logout(returnUrl: string): void {
        this.router.navigateByUrl(returnUrl, {
            replaceUrl: true
        });
    }

    private processLogoutCallback(): void {
        const url = window.location.href;
        const returnUrl = this.getReturnUrl();
        this.router.navigateByUrl(returnUrl, {
            replaceUrl: true
        });
    }

    private getReturnUrl(): string {
        return '/logged-out'; // Modify this with the actual logged out URL
    }
}