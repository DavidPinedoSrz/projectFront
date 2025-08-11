import { Component } from '@angular/core';
import { Subject } from '../../../../../interfaces/iSubject';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { SubjectService } from '../../../../../services/subject/subject.service';
import { DatePipe } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
  selector: 'app-subject-list',
  standalone: true,
  imports: [TableModule, CommonModule, DatePipe],
  templateUrl: './subject-list.html',
  styleUrls: ['./subject-list.css']
})
export class SubjectList {
    subjects!: Subject[];
    cols!: Column[];

    constructor(private subjectService: SubjectService) {}

    ngOnInit() {
        this.subjects = this.subjectService.getAllSubjects();

        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'name', header: 'Nombre' },
            { field: 'code', header: 'Código' },
            { field: 'gradeId', header: 'ID Grado' },
            { field: 'hoursPerWeek', header: 'Horas/Semana' },
            { field: 'isActive', header: 'Activo' },
            { field: 'createdAt', header: 'Creado' }
        ];
    }
}