import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

import { Symbol } from "../SymbolComponent/symbol.ts";

@Injectable()
export class ApiService {

    private symbolStream: Subject<Symbol>;

    constructor() {
        this.symbolStream = <Subject<Symbol>>new Subject();
    }

    getSymbolStream() {
        return this.symbolStream.asObservable();
    }

    pushSymbol() {
        let symbol: Symbol = new Symbol({id: +new Date(), title: 'Symbol'});

        this.symbolStream.next(symbol);
    }

    getSymbolById(id: number) {
        let symbol: Symbol = new Symbol({id: id, title: 'Symbol'});

        this.symbolStream.next(symbol);
    }

    getSymbolList() {
        let symbolList: Array<Symbol> = [];

        for (let i = 0; i < 10; i++) {
            symbolList.push(new Symbol({id: i, title: 'Symbol'}));
        }

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