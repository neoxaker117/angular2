import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { routing, appRoutingProviders }  from './app.routing.ts';
import { MainComponent }   from './MainComponent/main.component.ts';
import { SymbolComponent } from "./SymbolComponent/symbol.component.ts";
import { ListComponent } from "./ListComponent/list.component.ts";
import { PageService } from "./MainComponent/main.service.ts";

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule.forRoot(),
        routing
    ],
    declarations: [
        MainComponent,
        SymbolComponent,
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