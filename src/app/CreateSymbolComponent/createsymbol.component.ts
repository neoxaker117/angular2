import { Component, OnInit } from '@angular/core';

import { PageService } from "../MainComponent/main.service.ts";
import { ApiService } from "../ApiComponent/api.service.ts";
import { Symbol } from "../SymbolComponent/symbol.ts";
import { SymbolService } from "../SymbolComponent/symbol.service.ts";

@Component({
    providers: [ApiService, SymbolService],
    selector: 'alphabetr-create-symbol',
    templateUrl: 'createsymbol.component.html',
})
export class CreateSymbolComponent implements OnInit {

    private symbol: Symbol = new Symbol();

    constructor(private pageService: PageService,
                private apiService: ApiService,
                private symbolService: SymbolService) {
    }

    onSubmit() {
        this.symbolService.createSymbol(this.symbol).then((symbol: Symbol) => {
            this.symbolService.goToSymbolPage(symbol);
        });
    }

    ngOnInit() {
        this.pageService.setPageTitle('Create symbol');
    }

}