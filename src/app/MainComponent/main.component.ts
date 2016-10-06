import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { MdSidenav } from "@angular/material";

import { MainService } from "./main.service.ts";

require('../../style/css/common.scss');

@Component({
    selector: 'alphabetr-app',
    templateUrl: 'main.component.html',
})

export class MainComponent implements OnInit {

    @ViewChild('sideNav') sideNav: MdSidenav;

    private pageTitle: string = '';

    constructor(
        private mainService: MainService,
        private router: Router
    ) {

    }

    ngOnInit() {
        this.router.events.subscribe(event => {

            if(event instanceof NavigationStart) {
                this.sideNav.close();
            }

            if(event instanceof NavigationEnd) {
                this.pageTitle = this.mainService.getPageTitle();
            }
        });
    }

}