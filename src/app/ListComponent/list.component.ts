import { Component, OnInit } from '@angular/core';
import { PageService } from "../MainComponent/main.service.ts";

@Component({
    selector: 'alphabetr-list',
    templateUrl: 'list.component.html',
})
export class ListComponent implements OnInit {

    constructor(private mainService: PageService) {

    }

    ngOnInit() {
        this.mainService.setPageTitle('List');
    }

}