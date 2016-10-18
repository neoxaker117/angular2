import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymbolPageComponent } from "./SymbolPage/symbol.page.component.ts";
import { LastSymbolsPageComponent } from "./LastSymbolsPage/last-symbols.page.component.ts";
import { CreateSymbolComponent } from "./CreateSymbolComponent/createsymbol.component.ts";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/list',
        pathMatch: 'full'
    },
    {
        path: 'symbol',
        component: CreateSymbolComponent
    },
    {
        path: 'symbol/:id',
        component: SymbolPageComponent
    },
    {
        path: 'last',
        component: LastSymbolsPageComponent
    },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
