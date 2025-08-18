import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { Ripple } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { GradeFormComponent } from "../grade/grade-form.component/grade-form.component";
import { SubjectFormComponent } from '../subject/subject-form.component/subject-form.component';
import { SubjectListComponent } from "../subject/subject-list.component/subject-list.component";

@Component({
    selector: 'app-management',
    standalone: true,
    imports: [PanelMenu, BadgeModule, Ripple, CommonModule, GradeFormComponent, SubjectFormComponent, SubjectListComponent],
    templateUrl: './management.html',
})
export class Management implements OnInit {
    items: MenuItem[] = [];
    currentView: string = ''; // Controla qué componente se renderiza
    showGradeDialog: boolean = false;

    ngOnInit() {
        this.items = [
            {
                label: 'Grados',
                icon: 'pi pi-graduation-cap',
                items: [
                    {
                        label: 'Crear Grados',
                        icon: 'pi pi-plus',
                        command: () => {
                            this.showGradeDialog = true;
                            this.setCurrentView('crear-grados')
                        }, // Cambia la vista al hacer clic
                    },
                    {
                        label: 'Mostrar Grados',
                        icon: 'pi pi-list',
                        command: () => this.setCurrentView('listar-grados'),
                    },
                    {
                        label: 'Editar Grados',
                        icon: 'pi pi-pencil',
                        command: () => this.setCurrentView('editar-grados'),
                    },
                    {
                        label: 'Eliminar Grados',
                        icon: 'pi pi-trash',
                        command: () => this.setCurrentView('eliminar-grados'),
                    },
                ],
            },
            {
                label: 'Materias',
                icon: 'pi pi-book',
                items: [
                    {
                        label: 'Crear Materias',
                        icon: 'pi pi-plus',
                        command: () => {
                            this.showGradeDialog = true;
                            this.setCurrentView('crear-materias')
                        }, // Cambia la vista al hacer clic
                    },
                    {
                        label: 'Mostrar Materias',
                        icon: 'pi pi-list',
                        command: () => this.setCurrentView('mostrar-materias')
                    },
                    {
                       label: 'Editar Materias',
                       icon: 'pi pi-pencil',
                       command: () => this.setCurrentView('editar-materias'),
                    },
                    {
                        label: 'Eliminar Materias',
                        icon: 'pi pi-trash',
                        command: () => this.setCurrentView('eliminar-materias'),
                    },
                ],
            },
        ];
    }

    // Cambiar la vista actual
    setCurrentView(view: string) {
        this.currentView = view;
        if (view === 'crear-grados') {
            this.showGradeDialog = true;
        }
    }

    onGradeDialogHide() {
        this.showGradeDialog = false;
    }

    onDialogHide() {
        this.showGradeDialog = false;
        this.currentView = '';
    }

    // Métodos para expandir/colapsar el menú
    toggleAll() {
        const expanded = !this.areAllItemsExpanded();
        this.items = this.toggleAllRecursive(this.items, expanded);
    }

    private toggleAllRecursive(items: MenuItem[], expanded: boolean): MenuItem[] {
        return items.map((menuItem) => {
            menuItem.expanded = expanded;
            if (menuItem.items) {
                menuItem.items = this.toggleAllRecursive(menuItem.items, expanded);
            }
            return menuItem;
        });
    }

    private areAllItemsExpanded(): boolean {
        return this.items.every((menuItem) => menuItem.expanded);
    }
}