import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PageService } from "../MainComponent/main.service.ts";
import { ApiService } from "../ApiComponent/api.service.ts";
import { Symbol } from "./symbol.ts";
import { SymbolService } from "./symbol.service.ts";

@Component({
    providers: [ApiService, SymbolService],
    selector: 'alphabetr-symbol',
    templateUrl: 'symbol.component.html',
})
export class SymbolComponent implements OnInit {

    private symbol: Symbol;

    constructor(private pageService: PageService,
                private apiService: ApiService,
                private route: ActivatedRoute,
                private symbolService: SymbolService) {

    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id: number = Number(params['id']);

            this.apiService.getSymbolById(id).then((symbol: Symbol) => {
                this.symbol = symbol;
            });
        });

        this.pageService.setPageTitle('Symbol');
    }

}