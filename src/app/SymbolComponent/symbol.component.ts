import { Component, OnInit } from '@angular/core';
import { PageService } from "../MainComponent/main.service.ts";

@Component({
    selector: 'alphabetr-symbol',
    templateUrl: 'symbol.component.html',
})

export class SymbolComponent implements OnInit {

    constructor(private pageService: PageService) {

    }

    ngOnInit() {
        this.pageService.setPageTitle('Symbol');
    }

}