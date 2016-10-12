export interface ISymbol {
    getId(): number;

    getTitle(): string;

    setTitle(title: string): void;
}

export interface ISymbolOptions {
    id?: number;
    title: string;
}