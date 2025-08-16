import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SpeedDialModule } from 'primeng/speeddial';
import { MenuItem } from 'primeng/api';
import { GradeService } from '../../../../../services/grade/grade.service';
import { MGrade } from '../../../../../models/nmanagement.model';



interface Grade {
  id: number;
  gradeName: string;
  alias: string;
}

@Component({
  selector: 'app-grade-list',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    TooltipModule,
    ToastModule,
    RouterModule,
    SpeedDialModule
  ],
  providers: [MessageService],
  templateUrl: './grade-list.html',
  styleUrls: ['./grade-list.css']
})
export class GradeList implements OnInit {
  grades: MGrade[] = [];
  loading: boolean = true;

  constructor(
    private gradeService: GradeService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadGrades();
  }

  loadGrades() {
    this.loading = true;
    this.gradeService.getGrades().subscribe({
      next: (grades) => {
        this.grades = grades;
        this.loading = false;
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error al cargar los grados'
        });
        this.loading = false;
      }
    });
  }

  actionItems(grade: MGrade): MenuItem[] {
    return [
      {
        label: 'Editar',
        icon: 'pi pi-pencil',
        command: () => {
          this.router.navigate([`/management/grade-edit/${grade.id}`]);
        },
        styleClass: 'p-button-warning mr-2'
      },
      {
        label: 'Eliminar',
        icon: 'pi pi-trash',
        command: () => this.deleteGrade(grade),
        styleClass: 'p-button-danger'
      }
    ];
  }

  deleteGrade(grade: MGrade) {
    this.gradeService.deleteGrade(grade.id).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: `Grado "${grade.name}" eliminado`,
          life: 3000
        });
        this.loadGrades(); // Recargar la lista
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo eliminar el grado'
        });
      }
    });
  }
}