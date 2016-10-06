import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SymbolComponent } from "./SymbolComponent/symbol.component.ts";
import { ListComponent } from "./ListComponent/list.component.ts";

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
    {
        path: 'list',
        component: ListComponent
    },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
