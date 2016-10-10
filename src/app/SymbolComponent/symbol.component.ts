import { Component, OnInit } from '@angular/core';

import { PageService } from "../MainComponent/main.service.ts";
import { ApiService } from "../ApiComponent/api.service.ts";
import { Symbol } from "./symbol";

@Component({
    providers: [ApiService],
    selector: 'alphabetr-symbol',
    templateUrl: 'symbol.component.html',
})

export class SymbolComponent implements OnInit {

    private symbol: Symbol;

    constructor(
        private pageService: PageService,
        private apiService: ApiService
    ) {

    }

    ngOnInit() {

        this.apiService.getSymbolById(42).then((symbol: Symbol) => {
            this.symbol = symbol;
        });


        this.pageService.setPageTitle('Symbol');
    }

}