import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SymbolComponent} from "./SymbolComponent/symbol.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/symbol',
        pathMatch: 'full'
    },
    {
        path: 'symbol',
        component: SymbolComponent
    },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
