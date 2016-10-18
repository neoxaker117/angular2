import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing.ts';
import { MainComponent } from './MainComponent/main.component.ts';
import { SymbolComponent } from "./SymbolComponent/symbol.component.ts";
import { SymbolPageComponent } from './SymbolPage/symbol.page.component.ts';
import { ListComponent } from "./ListComponent/list.component.ts";
import { LastSymbolsPageComponent } from "./LastSymbolsPage/last-symbols.page.component.ts";
import { PageService } from "./MainComponent/main.service.ts";
import { CreateSymbolComponent } from "./CreateSymbolComponent/createsymbol.component.ts";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule.forRoot(),
        routing
    ],
    declarations: [
        CreateSymbolComponent,
        MainComponent,
        SymbolComponent,
        SymbolPageComponent,
        LastSymbolsPageComponent,
        ListComponent
    ],
    providers: [
        appRoutingProviders,
        PageService
    ],
    bootstrap: [
        MainComponent
    ]
})

export class AppModule {
}