import { Component, OnInit } from '@angular/core';

import { PageService } from "../MainComponent/main.service.ts";
import { ApiService } from "../ApiComponent/api.service.ts";
import { Symbol } from "../SymbolComponent/symbol.ts";
import { SymbolService } from "../SymbolComponent/symbol.service.ts";

@Component({
    providers: [ApiService, SymbolService],
    selector: 'alphabetr-list',
    templateUrl: 'list.component.html',
})
export class ListComponent implements OnInit {

    private symbolList: Array<Symbol>;

    constructor(private mainService: PageService,
                private apiService: ApiService,
                private symbolService: SymbolService) {

    }

    ngOnInit() {
        this.apiService.getSymbolList().then((symbolList: Array<Symbol>) => {
            this.symbolList = symbolList;
        });

        this.mainService.setPageTitle('List');
    }

}