import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { PageService } from "../MainComponent/main.service.ts";
import { ApiService } from "../ApiComponent/api.service.ts";
import { Symbol } from "../SymbolComponent/symbol.ts";
import { SymbolService } from "../SymbolComponent/symbol.service.ts";
import { ISymbolOptions } from "../SymbolComponent/symbol.interface.ts";

declare var PIXI: any;

@Component({
    providers: [ApiService, SymbolService],
    selector: 'alphabetr-create-symbol',
    templateUrl: 'createsymbol.component.html',
})
export class CreateSymbolComponent implements OnInit {

    @ViewChild('createCanvas') createCanvas: any;

    private symbolForm: FormGroup;
    private pixiCanvas: any = {};

    constructor(private pageService: PageService,
                private apiService: ApiService,
                private symbolService: SymbolService,
                private formBuilder: FormBuilder) {

    }

    onSubmit(value: ISymbolOptions) {
        if (!this.symbolForm.valid) {
            return false;
        }

        let newSymbol: Symbol = new Symbol(value);

        this.drawText(newSymbol.getTitle());

        // this.symbolService.createSymbol(newSymbol).then((symbol: Symbol) => {
        //     this.symbolService.goToSymbolPage(symbol);
        // });
    }

    validateField(fieldName: string, error: string) {
        let notValid = false;
        let field = this.symbolForm.controls[fieldName];

        if (field.hasError(error) && field.touched) {
            notValid = true;
        }

        return notValid;
    }

    drawText(text: string) {
        this.pixiCanvas.stage = new PIXI.Container();

        var canvasText = new PIXI.Text(text, {
            fontFamily: 'Arial',
            fontSize: 24,
            fill: 0xff1010,
            align: 'center'
        });

        this.pixiCanvas.stage.addChild(canvasText);

        this.pixiCanvas.renderer.render(this.pixiCanvas.stage);
    }

    ngOnInit() {
        this.symbolForm = this.formBuilder.group({
            'title': ['', [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(24),
            ]],
        });

        this.pixiCanvas.renderer = PIXI.autoDetectRenderer(200, 200, {
            view: this.createCanvas.nativeElement
        });

        this.pageService.setPageTitle('Create symbol');
    }

}