import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MainComponent}   from './MainComponent/main.component.ts';

@NgModule({
    imports: [BrowserModule],
    declarations: [MainComponent],
    bootstrap: [MainComponent]
})

export class AppModule {
}