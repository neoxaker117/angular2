import { Component, OnInit, Input } from '@angular/core';

import { ApiService } from "../ApiComponent/api.service.ts";
import { Symbol } from "./symbol.ts";
import { SymbolService } from "./symbol.service.ts";

@Component({
    providers: [ApiService, SymbolService],
    selector: 'alphabetr-symbol',
    templateUrl: 'symbol.component.html',
})
export class SymbolComponent implements OnInit {

    @Input() symbol: Symbol;

    constructor(private apiService: ApiService,
                private symbolService: SymbolService) {

    }

    ngOnInit() {

    }

}