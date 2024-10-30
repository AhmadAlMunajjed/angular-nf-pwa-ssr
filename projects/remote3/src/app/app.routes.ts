import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
    },
    {
        path: 'page1',
        loadComponent: () => import('./page1/page1.component').then((m) => m.Page1Component),
    },
    {
        path: 'page2',
        loadComponent: () => import('./page2/page2.component').then((m) => m.Page2Component),
    },
];
