import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { PageService } from "../MainComponent/main.service.ts";
import { ApiService } from "../ApiComponent/api.service.ts";
import { Symbol } from "../SymbolComponent/symbol.ts";
import { SymbolService } from "../SymbolComponent/symbol.service.ts";

@Component({
    providers: [ApiService, SymbolService],
    selector: 'alphabetr-create-symbol',
    templateUrl: 'createsymbol.component.html',
})
export class CreateSymbolComponent implements OnInit {

    private symbol: Symbol = new Symbol();
    private symbolForm: FormGroup;

    constructor(private pageService: PageService,
                private apiService: ApiService,
                private symbolService: SymbolService,
                private formBuilder: FormBuilder) {

    }

    onSubmit(value: any) {
        if (!this.symbolForm.valid) {
            return false;
        }

        let form = {
            title: value.title,
        };

        let newSymbol: Symbol = new Symbol(form);

        this.symbolService.createSymbol(newSymbol).then((symbol: Symbol) => {
            this.symbolService.goToSymbolPage(symbol);
        });
    }

    validateField(field: string, error: string) {
        return this.symbolForm.controls[field].hasError(error) && this.symbolForm.controls[field].touched;
    }

    ngOnInit() {
        this.symbolForm = this.formBuilder.group({
            'title': ['', [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(24),
            ]],
        });

        this.pageService.setPageTitle('Create symbol');
    }

}