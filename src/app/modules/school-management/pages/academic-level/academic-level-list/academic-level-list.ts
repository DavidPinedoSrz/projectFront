import { Component } from '@angular/core';
import { AcademicLevel } from '../../../../../interfaces/iAcademic-level';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { AcademicLevelService } from '../../../../../services/academic-level/academic-level.service';
import { DatePipe } from '@angular/common';

interface Column {
    field: string;
    header: string;
}

@Component({
  selector: 'app-academic-level-list',
  standalone: true,
  imports: [TableModule, CommonModule, DatePipe],
  templateUrl: './academic-level-list.html',
  styleUrls: ['./academic-level-list.css']
})
export class AcademicLevelList {
    academicLevels!: AcademicLevel[];
    cols!: Column[];

    constructor(private academicLevelService: AcademicLevelService) {}

    ngOnInit() {
        this.academicLevels = this.academicLevelService.getAllAcademicLevels();

        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'name', header: 'Nombre' },
            { field: 'school_id', header: 'ID Escuela' },
            { field: 'cct', header: 'CCT' },
            { field: 'registration_dt', header: 'Fecha Registro' },
            { field: 'inc_unam', header: 'Clave UNAM' }
        ];
    }
}