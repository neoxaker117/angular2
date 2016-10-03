import {Component, Input, OnInit} from '@angular/core';

require('../../style/css/common.scss');

@Component({
    selector: 'app',
    templateUrl: 'main.component.html',
})

export class MainComponent {
    @Input() date: number;

    private nowDate: Date;

    constructor() {

    }

    ngOnInit() {
        this.nowDate = new Date();
        this.date = this.nowDate.getFullYear();
    }
}