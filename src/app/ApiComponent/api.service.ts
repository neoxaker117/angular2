import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

import { Symbol } from "../SymbolComponent/symbol.ts";

@Injectable()
export class ApiService {

    private stream: Subject<Symbol>;

    constructor() {
        this.stream = <Subject<Symbol>>new Subject();
    }

    getStream() {
        return this.stream.asObservable();
    }

    pushSymbol() {
        let symbol: Symbol = new Symbol({id: +new Date(), title: 'Symbol'});

        this.stream.next(symbol);
    }

    getSymbolById(id: number) {
        let symbol: Symbol = new Symbol({id: id, title: 'Symbol'});

        this.stream.next(symbol);

        // return new Promise((resolve, reject) => {
        //     resolve(symbol);
        // });
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