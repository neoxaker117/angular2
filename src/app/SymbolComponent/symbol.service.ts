import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

import { Symbol } from "../SymbolComponent/symbol.ts";
import { ApiService } from "../ApiComponent/api.service.ts";

@Injectable()
export class SymbolService {

    constructor(
        private router: Router,
        private apiService: ApiService
    ) {

    }

    goToSymbolPage(symbol: Symbol) {
        let link = ['/symbol', symbol.getId()];

        this.router.navigate(link);
    }

    createSymbol(symbol: Symbol) {
        return this.apiService.sendSymbol(symbol);
    }

}