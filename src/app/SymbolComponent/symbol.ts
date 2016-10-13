import { ISymbol, ISymbolOptions } from "./symbol.interface.ts"

export class Symbol implements ISymbol {

    private id: number;
    private title: string;
    private image: File;

    constructor(options?: ISymbolOptions) {
        this.id = options && options.id || 0;
        this.title = options && options.title || '';
        this.image = options && options.image;
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

    public getImage() {
        return this.image;
    }

    public setImage(image: File) {
        this.image = image;
    }

}