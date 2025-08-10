import { Component } from '@angular/core';
import { Grade } from '../../../../../interfaces/iGrade';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { GradeService } from '../../../../../services/grade/grade.service';
import { DatePipe } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
  selector: 'app-grade-list',
  standalone: true,
  imports: [TableModule, CommonModule, DatePipe],
  templateUrl: './grade-list.html',
  styleUrls: ['./grade-list.css']
})
export class GradeList {
    grades!: Grade[];
    cols!: Column[];

    constructor(private gradeService: GradeService) {}

    ngOnInit() {
        this.grades = this.gradeService.getAllGrades();

        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'name', header: 'Nombre' },
            { field: 'alias', header: 'Alias' },
            { field: 'level_id', header: 'ID Nivel' },
            { field: 'order_index', header: 'Orden' },
            { field: 'registration_dt', header: 'Fecha Registro' }
        ];
    }
}