import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders }  from './app.routing.ts';
import { MainComponent }   from './MainComponent/main.component.ts';
import { SymbolComponent } from "./SymbolComponent/symbol.component.ts";

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        MainComponent,
        SymbolComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [
        MainComponent
    ]
})

export class AppModule {
}