import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
import { BadgeModule } from 'primeng/badge';
import { Ripple } from 'primeng/ripple';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-management',
    standalone: true,
    imports: [PanelMenu, BadgeModule, Ripple, CommonModule],
    templateUrl: './management.html',
})
export class Management implements OnInit {
    items: MenuItem[] = [];
    currentView: string = ''; // Controla qué componente se renderiza

    ngOnInit() {
        this.items = [
            {
                label: 'Grados',
                icon: 'pi pi-graduation-cap',
                items: [
                    {
                        label: 'Crear Grados',
                        icon: 'pi pi-plus',
                        command: () => this.setCurrentView('crear-grados'), // Cambia la vista al hacer clic
                    },
                    {
                        label: 'Mostrar Grados',
                        icon: 'pi pi-list',
                        command: () => this.setCurrentView('listar-grados'),
                    },
                    {
                        label: 'Eliminar Grados',
                        icon: 'pi pi-trash',
                    },
                    {
                        label: 'Editar Grados',
                        icon: 'pi pi-pencil',
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
                        command: () => this.setCurrentView('crear-materias'),
                    },
                    {
                        label: 'Mostrar Materias',
                        icon: 'pi pi-list',
                        command: () => this.setCurrentView('listar-materias'),
                    },
                    {
             label: 'Editar Materias',
            icon: 'pi pi-pencil',
                    },
                    {
             label: 'Eliminar Materias',
             icon: 'pi pi-trash',
          },
                ],
            },
        ];
    }

    // Cambia la vista actual
    setCurrentView(view: string) {
        this.currentView = view;
    }

    // Métodos para expandir/colapsar el menú (opcional)
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