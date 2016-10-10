import { Injectable } from "@angular/core";
import { Title } from '@angular/platform-browser';

@Injectable()
export class PageService {

    private pageTitle: string;

    constructor(private titleService: Title) {

    }

    public setDocumentTitle(title: string) {
        this.titleService.setTitle(title);
    }

    public setPageTitle(title: string) {
        this.pageTitle = title;
    }

    public getPageTitle() {
        return this.pageTitle;
    }

}