import { Component, OnInit } from '@angular/core';
import { MainService } from "../MainComponent/main.service.ts";

@Component({
    selector: 'alphabetr-symbol',
    templateUrl: 'symbol.component.html',
})

export class SymbolComponent implements OnInit {

    constructor(private mainService: MainService) {

    }

    ngOnInit() {
        this.mainService.setPageTitle('Symbol');
    }

}