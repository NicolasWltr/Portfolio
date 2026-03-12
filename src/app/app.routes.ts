import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./sections/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'impressum',
        loadComponent: () => import('./sections/impressum/impressum.component').then(m => m.ImpressumComponent)
    }
];
