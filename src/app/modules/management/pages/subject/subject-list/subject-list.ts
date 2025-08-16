import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { TagModule } from 'primeng/tag';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SpeedDialModule } from 'primeng/speeddial';
import { MenuItem } from 'primeng/api';

interface Subject {
  id: number;
  name: string;
  code: string;
  gradeId: number;
  hoursPerWeek: number;
  isActive: boolean;
}

@Component({
  selector: 'app-subject-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    TooltipModule,
    ToastModule,
    TagModule,
    RouterModule,
    SpeedDialModule
  ],
  providers: [MessageService],
  templateUrl: './subject-list.html',
  styleUrls: ['./subject-list.css']
})
export class SubjectList {
  subjects: Subject[] = [
    { id: 1, name: 'Matemáticas', code: 'MATH-101', gradeId: 1, hoursPerWeek: 5, isActive: true },
    { id: 2, name: 'Lenguaje', code: 'LANG-101', gradeId: 1, hoursPerWeek: 4, isActive: true },
    { id: 3, name: 'Ciencias', code: 'SCI-101', gradeId: 2, hoursPerWeek: 3, isActive: false }
  ];

  

  actionItems(subject: Subject): MenuItem[] {
  return [
    {
      label: 'Editar',
      icon: 'pi pi-pencil',
      command: () => {
        this.router.navigate([`/management/subject-edit/${subject.id}`]);
      },
      styleClass: 'p-button-warning mb-2'
    },
    {
      label: 'Eliminar',
      icon: 'pi pi-trash',
      command: () => this.deleteSubject(subject),
      styleClass: 'p-button-danger'
    }
  ];
}


  editSubject(subject: Subject) {
    this.messageService.add({
      severity: 'info',
      summary: 'Editar',
      detail: `Editando materia: ${subject.name}`
    });
    // Lógica de edición aquí
  }

  deleteSubject(subject: Subject) {
    this.messageService.add({
      severity: 'error',
      summary: 'Eliminar',
      detail: `Eliminando materia: ${subject.name}`
    });
    // Lógica de eliminación aquí
  }
  
  constructor(
  private messageService: MessageService,
  private router: Router
) {}
}