import { Component } from '@angular/core';
import { School } from '../../../../../interfaces/iSchool';
import { TableModule } from 'primeng/table';
import { CommonModule, DatePipe } from '@angular/common';
import { SchoolService } from '../../../../../services/school/school.service';

interface Column {
    field: string;
    header: string;
}

@Component({
  selector: 'app-school-list',
  standalone: true,
  imports: [TableModule, CommonModule, DatePipe],
  templateUrl: './school-list.html',
  styleUrls: ['./school-list.css']
})
export class SchoolList {
    schools!: School[];
    cols!: Column[];
    loading: boolean = true;

    constructor(private schoolService: SchoolService) {}

    ngOnInit() {
        this.loadSchools();
        this.initColumns();
    }

    loadSchools() {
        this.loading = true;
        this.schools = this.schoolService.getAllSchools();
        this.loading = false;
    }

    initColumns() {
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'name', header: 'Nombre' },
            { field: 'identifier_alias', header: 'Alias' },
            { field: 'registration_dt', header: 'Fecha de Registro' },
        ];
    }

    deleteSchool(id: number) {
        if (confirm('¿Estás seguro de eliminar esta escuela?')) {
            const success = this.schoolService.deleteSchool(id);
            if (success) {
                this.loadSchools();
            }
        }
    }
}