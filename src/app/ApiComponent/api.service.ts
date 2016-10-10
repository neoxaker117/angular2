import { Injectable } from "@angular/core";
import { Symbol } from "../SymbolComponent/symbol.ts";

@Injectable()
export class ApiService {

    constructor() {

    }

    getSymbolById(id: number) {
        let symbol: Symbol = new Symbol('New symbol: ' + id);

        return new Promise((resolve, reject) => {
            resolve(symbol);
        });
    }

    getSymbolList() {
        let symbolList: Array<Symbol> = [
            new Symbol('symbol 1'),
            new Symbol('symbol 2'),
            new Symbol('symbol 3'),
            new Symbol('symbol 4'),
            new Symbol('symbol 5'),
        ];

        return new Promise((resolve, reject) => {
            resolve(symbolList);
        });
    }

}