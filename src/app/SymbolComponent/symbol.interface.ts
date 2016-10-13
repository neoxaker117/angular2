export interface ISymbol {
    getId(): number;

    getTitle(): string;

    setTitle(title: string): void;

    getImage(): File;

    setImage(image: File): void;
}

export interface ISymbolOptions {
    id?: number;
    title: string;
    image?: File;
}