import { Component, OnInit } from '@angular/core';
import { MainService } from "../MainComponent/main.service.ts";

@Component({
    selector: 'alphabetr-list',
    templateUrl: 'list.component.html',
})
export class ListComponent implements OnInit {

    constructor(private mainService: MainService) {

    }

    ngOnInit() {
        this.mainService.setPageTitle('List');
    }

}