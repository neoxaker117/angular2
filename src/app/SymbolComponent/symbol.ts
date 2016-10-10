import { ISymbol } from "./symbol.interface.ts"

export class  Symbol implements ISymbol {

    constructor(
        private title: string
    ) {  }

    public getTitle() {
        return this.title;
    }

    public setTitle(title: string) {
        this.title = title;
    }

}