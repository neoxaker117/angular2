import { ISymbol } from "./symbol.interface.ts"

export class  Symbol implements ISymbol {

    constructor(
        private id: number = 0,
        private title: string = ''
    ) {  }

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