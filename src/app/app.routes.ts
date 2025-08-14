import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { Bienvenida } from './components/bienvenida/bienvenida';


export const routes: Routes = [
    { path: '', component: Bienvenida },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Iniciar Sesión | Fundación Mier y Pesado'
    },
    {
        path: 'management',
        loadChildren: () => import('./modules/management/management-module').then(m => m.ManagementModule),
    },
    { path: '**', redirectTo: '' }
];
