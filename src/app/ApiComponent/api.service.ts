import { Injectable } from "@angular/core";

import { Symbol } from "../SymbolComponent/symbol.ts";

@Injectable()
export class ApiService {

    constructor() {

    }

    getSymbolById(id: number) {
        let symbol: Symbol = new Symbol({id: id, title: 'Symbol'});

        return new Promise((resolve, reject) => {
            resolve(symbol);
        });
    }

    getSymbolList() {
        let symbolList: Array<Symbol> = [
            new Symbol({id: 1, title: 'Symbol'}),
            new Symbol({id: 2, title: 'Symbol'}),
            new Symbol({id: 3, title: 'Symbol'}),
            new Symbol({id: 4, title: 'Symbol'}),
            new Symbol({id: 5, title: 'Symbol'}),
        ];

        return new Promise((resolve, reject) => {
            resolve(symbolList);
        });
    }

    sendSymbol(symbol: Symbol) {
        return new Promise((resolve, reject) => {
            let savedSymbol: Symbol = new Symbol({id: Date.now(), title: 'New symbol'});

            resolve(savedSymbol);
        });
    }

}