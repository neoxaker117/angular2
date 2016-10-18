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
    private symbol: Symbol;
    private layers: any;

    constructor(private pageService: PageService,
                private apiService: ApiService,
                private symbolService: SymbolService,
                private formBuilder: FormBuilder,
                private renderer: Renderer) {

    }

    onKeyUp(value: ISymbolOptions) {
        this.drawSymbol(value.title);
        this.drawText(value.title);
    }

    onFileChange(event: any) {
        let fileList: FileList = event.target.files;
        let file: File;
        let isValid: Boolean = true;

        if (fileList.length) {
            file = fileList[0];
        } else {
            isValid = false;
        }

        if (isValid) {
            this.drawImage(file);
        }
    }

    onSubmit(value: ISymbolOptions) {
        if (!this.symbolForm.valid) {
            return false;
        }

        // this.symbolService.createSymbol(this.symbol).then((symbol: Symbol) => {
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

    initCanvasLayers() {
        this.layers = {
            symbol: new PIXI.Container(),
            text: new PIXI.Container(),
            image: new PIXI.Container()
        };

        this.pixiCanvas.stage = new PIXI.Container();

        this.pixiCanvas.stage.addChild(this.layers.image);
        this.pixiCanvas.stage.addChild(this.layers.symbol);
        this.pixiCanvas.stage.addChild(this.layers.text);
    }

    renderCanvasStage() {
        this.pixiCanvas.renderer.render(this.pixiCanvas.stage);
    }

    drawImage(file: File) {
        var reader = new FileReader();

        reader.addEventListener("load", () => {
            let sprite = new PIXI.Sprite.fromImage(reader.result);

            this.layers.image.removeChildren();
            this.layers.image.addChild(sprite);
        });

        reader.readAsDataURL(file);
    }

    drawSymbol(text: string) {
        let style = {
            align: 'center',
            fontFamily: 'Arial',
            fontSize: '56px',
            fontWeight: 'bold',
            fill: '#F7EDCA',
            stroke: '#4a1850',
            strokeThickness: 5,
            lineJoin: 'round',
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: this.canvasSize.width
        };

        let drawSymbol = text.slice(0, 1).toUpperCase();
        let canvasText = new PIXI.Text(drawSymbol, style);

        canvasText.x = 10;

        this.layers.symbol.removeChildren();
        this.layers.symbol.addChild(canvasText);
    }

    drawText(text: string) {
        let style = {
            align: 'center',
            fontFamily: 'Arial',
            fontSize: 36,
            lineHeight: 38,
            fill: '#F7EDCA',
            stroke: '#4a1850',
            strokeThickness: 5,
            lineJoin: 'round',
            wordWrap: true,
            wordWrapWidth: this.canvasSize.width
        };

        let drawText = text.toLowerCase();
        let canvasText = new PIXI.Text(drawText, style);

        let canvasTextCenterX = (this.canvasSize.width - canvasText.width) / 2;
        let canvasTextCenterY = (this.canvasSize.height - canvasText.height);

        canvasText.x = canvasTextCenterX;
        canvasText.y = canvasTextCenterY;

        this.layers.text.removeChildren();
        this.layers.text.addChild(canvasText);
    }

    ngOnInit() {
        this.symbolForm = this.formBuilder.group({
            'title': ['', [
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(100),
            ]],
            'image': ['', [
                Validators.required,
            ]],
        });

        this.symbol = new Symbol();

        this.canvasSize = {
            width: 300,
            height: 300
        };

        this.renderer.setElementStyle(this.createCanvas.nativeElement, 'width', this.canvasSize.width + 'px');
        this.renderer.setElementStyle(this.createCanvas.nativeElement, 'height', this.canvasSize.height + 'px');

        this.pixiCanvas.renderer = PIXI.autoDetectRenderer(this.canvasSize.width, this.canvasSize.height, {
            view: this.createCanvas.nativeElement,
            backgroundColor: 0x1099bb,
            antialias: true,
            resolution: 2
        });

        this.initCanvasLayers();

        let animate = () => {
            window.requestAnimationFrame(animate);
            this.renderCanvasStage();
        };
        animate();

        this.pageService.setPageTitle('Create symbol');
    }

}