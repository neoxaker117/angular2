import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

import { Symbol } from "../SymbolComponent/symbol.ts";

@Injectable()
export class SymbolService {

    constructor(private router: Router) {

    }

    goToSymbolPage(symbol: Symbol) {
        let link = ['/symbol', symbol.getId()];

        this.router.navigate(link);
    }

}