import { Injectable } from "@angular/core";

@Injectable()
export class MainService {

    private pageTitle: string;

    constructor() {

    }

    public setPageTitle(title: string) {
        this.pageTitle = title;
    }

    public getPageTitle() {
        return this.pageTitle;
    }

}