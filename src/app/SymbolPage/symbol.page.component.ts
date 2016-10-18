import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PageService } from "../MainComponent/main.service.ts";
import { ApiService } from "../ApiComponent/api.service.ts";
import { Symbol } from "../SymbolComponent/symbol.ts";

@Component({
    providers: [ApiService],
    selector: 'alphabetr-symbol-page',
    templateUrl: 'symbol.page.component.html',
})
export class SymbolPageComponent implements OnInit {

    private symbol: Symbol;

    constructor(private pageService: PageService,
                private apiService: ApiService,
                private route: ActivatedRoute) {

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