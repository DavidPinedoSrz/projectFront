import { Routes } from '@angular/router';



export const routes: Routes = [
    {
        path: 'management',
        loadChildren: () => import('./modules/management/management-module').then(m => m.ManagementModule),
    },
    { path: '**', redirectTo: '' }
];
