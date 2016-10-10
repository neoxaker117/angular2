import { Injectable } from "@angular/core";
import { Symbol } from "../SymbolComponent/symbol.ts";

@Injectable()
export class ApiService {

    constructor() {

    }

    getSymbolById(id: number) {

        let symbol: Symbol = new Symbol('New symbol: ' + id);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(symbol);
            }, 500);
        });
    }

}