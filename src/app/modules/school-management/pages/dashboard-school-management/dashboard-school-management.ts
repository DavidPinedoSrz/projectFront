import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-school-management-dashboard',
  standalone: true,
  imports: [RouterModule, CardModule, PanelMenuModule, CommonModule],
  templateUrl: './dashboard-school-management.html',
  styleUrls: ['./dashboard-school-management.html']
})
export class DashboardSchoolManagement {
  items: MenuItem[] = [
    {
      label: 'Escuelas',
      icon: 'pi pi-building',
      items: [
        { label: 'Listar Escuelas', icon: 'pi pi-list', routerLink: '/school-management/schools' },
        { label: 'Crear Escuela', icon: 'pi pi-plus', routerLink: '/school-management/schools/new' }
      ]
    },
    {
      label: 'Niveles Académicos',
      icon: 'pi pi-sitemap',
      items: [
        { label: 'Listar por Escuela', icon: 'pi pi-list', routerLink: '/school-management/academic-levels' },
        { label: 'Crear Nivel', icon: 'pi pi-plus', routerLink: '/school-management/academic-levels/new' }
      ]
    },
    {
      label: 'Grados',
      icon: 'pi pi-sliders-h',
      items: [
        { label: 'Listar por Nivel', icon: 'pi pi-list', routerLink: '/school-management/grades' },
        { label: 'Crear Grado', icon: 'pi pi-plus', routerLink: '/school-management/grades/new' }
      ]
    },
    {
      label: 'Asignaturas',
      icon: 'pi pi-book',
      items: [
        { label: 'Listar por Grado', icon: 'pi pi-list', routerLink: '/school-management/subjects' },
        { label: 'Crear Asignatura', icon: 'pi pi-plus', routerLink: '/school-management/subjects/new' }
      ]
    },
    {
      label: 'Campos Formativos',
      icon: 'pi pi-shield',
      items: [
        { label: 'Listar Campos', icon: 'pi pi-list', routerLink: '/school-management/field' },
        { label: 'Crear Campo', icon: 'pi pi-plus', routerLink: '/school-management/field/new' },
        { label: 'Administrar Campos', icon: 'pi pi-cog' }
      ]
    }
  ];
}