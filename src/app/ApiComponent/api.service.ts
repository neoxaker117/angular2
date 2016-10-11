import { Injectable } from "@angular/core";
import { Symbol } from "../SymbolComponent/symbol.ts";

@Injectable()
export class ApiService {

    constructor() {

    }

    getSymbolById(id: number) {
        let symbol: Symbol = new Symbol(id, 'New symbol');

        return new Promise((resolve, reject) => {
            resolve(symbol);
        });
    }

    getSymbolList() {
        let symbolList: Array<Symbol> = [
            new Symbol(1, 'symbol'),
            new Symbol(2, 'symbol'),
            new Symbol(3, 'symbol'),
            new Symbol(4, 'symbol'),
            new Symbol(5, 'symbol'),
        ];

        return new Promise((resolve, reject) => {
            resolve(symbolList);
        });
    }

}