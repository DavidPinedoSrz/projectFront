import { Component } from '@angular/core';
import { School } from '../../../../../interfaces/iSchool';
import { DatabaseService } from '../../../../../services/database.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

interface Column {
    field: string;
   header: string;
}

@Component({
  selector: 'app-school-list',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './school-list.html',
  styleUrl: './school-list.css'
})
export class SchoolList {
    schools!: School[];
    cols!: Column[];

    constructor(private db: DatabaseService) {}

    ngOnInit() {
        // Obtener las escuelas del servicio
        this.schools = this.db.getSchools();

        // Configurar las columnas de la tabla
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'name', header: 'Nombre' },
            { field: 'identifier_alias', header: 'Alias' },
            { field: 'registration_dt', header: 'Fecha de Registro' }
        ];
    }
}