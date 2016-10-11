import { ISymbol, ISymbolOptions } from "./symbol.interface.ts"

export class Symbol implements ISymbol {

    private id: number;
    private title: string;

    constructor(options?: ISymbolOptions) {
        this.id = options && options.id || 0;
        this.title = options && options.title || '';
    }

    public getId() {
        return this.id;
    }

    public getTitle() {
        return this.title;
    }

    public setTitle(title: string) {
        this.title = title;
    }

}