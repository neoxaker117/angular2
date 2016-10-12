import { Component, OnInit, ViewChild, Renderer } from '@angular/core';
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
    private canvasSize: { width: number, height: number };

    constructor(private pageService: PageService,
                private apiService: ApiService,
                private symbolService: SymbolService,
                private formBuilder: FormBuilder,
                private renderer: Renderer) {

    }

    onSubmit(value: ISymbolOptions) {
        if (!this.symbolForm.valid) {
            return false;
        }

        let newSymbol: Symbol = new Symbol(value);

        this.createCanvasStage();

        this.drawText(newSymbol.getTitle());

        this.renderCanvasStage();

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

    createCanvasStage() {
        this.pixiCanvas.stage = new PIXI.Container();
    }

    renderCanvasStage() {
        this.pixiCanvas.renderer.render(this.pixiCanvas.stage);
    }

    drawText(text: string) {
        var style = {
            align: 'center',
            fontFamily: 'Arial',
            fontSize: '36px',
            // fontStyle: 'italic',
            // fontWeight: 'bold',
            fill: '#F7EDCA',
            stroke: '#4a1850',
            strokeThickness: 5,
            // dropShadow: true,
            // dropShadowColor: '#000000',
            // dropShadowAngle: Math.PI / 6,
            // dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: this.canvasSize.width
        };

        var canvasText = new PIXI.Text(text, style);

        var canvasTextCenterX = (this.canvasSize.width - canvasText.width) / 2;
        var canvasTextCenterY = (this.canvasSize.height - canvasText.height);

        canvasText.x = canvasTextCenterX;
        canvasText.y = canvasTextCenterY;

        this.pixiCanvas.stage.addChild(canvasText);
    }

    ngOnInit() {
        this.symbolForm = this.formBuilder.group({
            'title': ['', [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(100),
            ]],
        });

        this.canvasSize = {
            width: 200,
            height: 200
        };

        this.renderer.setElementStyle(this.createCanvas.nativeElement, 'width', this.canvasSize.width + 'px');
        this.renderer.setElementStyle(this.createCanvas.nativeElement, 'height', this.canvasSize.height + 'px');

        this.pixiCanvas.renderer = PIXI.autoDetectRenderer(this.canvasSize.width, this.canvasSize.height, {
            view: this.createCanvas.nativeElement,
            backgroundColor: 0x1099bb,
            antialias: true,
            resolution: 2
        });

        this.createCanvasStage();

        this.renderCanvasStage();

        this.pageService.setPageTitle('Create symbol');
    }

}