import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { Bienvenida } from './components/bienvenida/bienvenida';
import { AuthModule } from './modules/auth/auth-module';

export const routes: Routes = [
    { path: '', component: Bienvenida },
    { 
    path: 'login', 
    component: LoginComponent,
    title: 'Iniciar Sesión | Fundación Mier y Pesado'
    },
    { 
    path: 'auth', 
    loadChildren: () => AuthModule,
    },
    { path: '**', redirectTo: '' }
];
