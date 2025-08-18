import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

interface MSubject {
  id: number;
  clave: string;
  training_areas: string;
  grade: string; 
  name: string;
}

interface SubjectGroup {
  area: string;
  subjects: MSubject[];
}

@Component({
    selector: 'app-subject-list-component',
    templateUrl: 'subject-list.component.html',
    standalone: true,
    imports: [
        TableModule, 
        TagModule, 
        RatingModule, 
        ButtonModule, 
        CommonModule, 
        FormsModule,
        InputTextModule
    ],
    providers: []
})
export class SubjectListComponent implements OnInit {
    subjectGroups: SubjectGroup[] = [];
    filteredGroups: SubjectGroup[] = [];
    searchTerm: string = '';
    
    cols = [
        { field: 'clave', header: 'Clave' },
        { field: 'name', header: 'Nombre' },
        { field: 'grade', header: 'Grado' }
    ];

    ngOnInit() {
        this.initializeSubjects();
    }

    initializeSubjects() {
        const subjects: MSubject[] = [
            {
                id: 1,
                clave: "MAT-101",
                training_areas: "Tronco Común",
                grade: "Primero",
                name: "Matemáticas Básicas"
            },
            {
                id: 2,
                clave: "FIL-201",
                training_areas: "Area I",
                grade: "Segundo",
                name: "Filosofía Contemporánea"
            },
            {
                id: 3,
                clave: "BIO-102",
                training_areas: "Area II",
                grade: "Primero",
                name: "Biología General"
            },
            {
                id: 4,
                clave: "QUI-202",
                training_areas: "Area III",
                grade: "Segundo",
                name: "Química Orgánica"
            },
            {
                id: 5,
                clave: "FIS-103",
                training_areas: "Area IV",
                grade: "Tercero",
                name: "Física Moderna"
            },
            {
                id: 6,
                clave: "ART-301",
                training_areas: "Autonomía Curricular",
                grade: "Tercero",
                name: "Arte y Expresión"
            },
            {
                id: 7,
                clave: "SOC-104",
                training_areas: "De Lo Humano Y Lo Comunitario",
                grade: "Primero",
                name: "Sociología Básica"
            },
            {
                id: 8,
                clave: "ETI-203",
                training_areas: "Ética, Naturaleza Y Sociedades",
                grade: "Segundo",
                name: "Ética Profesional"
            },
            {
                id: 9,
                clave: "LEN-105",
                training_areas: "Lenguajes",
                grade: "Primero",
                name: "Lengua y Literatura"
            },
            {
                id: 10,
                clave: "CIE-204",
                training_areas: "Saberes Y Pensamiento Científico",
                grade: "Segundo",
                name: "Metodología Científica"
            },
            {
                id: 11,
                clave: "COM-302",
                training_areas: "De Lo Humano A Lo Comunitario",
                grade: "Tercero",
                name: "Comunicación Social"
            },
            {
                id: 12,
                clave: "AMB-205",
                training_areas: "Ética, Naturaleza Y Sociedad",
                grade: "Segundo",
                name: "Educación Ambiental"
            },
            {
                id: 13,
                clave: "INS-303",
                training_areas: "Materia Institucional",
                grade: "Tercero",
                name: "Historia Institucional"
            },
            {
                id: 14,
                clave: "LOG-106",
                training_areas: "Saberes Y Pensamiento Científico",
                grade: "Primero",
                name: "Lógica Matemática"
            }
        ];

        const groupsMap = new Map<string, MSubject[]>();
        
        subjects.forEach(subject => {
            if (!groupsMap.has(subject.training_areas)) {
                groupsMap.set(subject.training_areas, []);
            }
            groupsMap.get(subject.training_areas)?.push(subject);
        });

        this.subjectGroups = Array.from(groupsMap.entries()).map(([area, subjects]) => ({
            area,
            subjects
        }));

        this.filteredGroups = [...this.subjectGroups];
    }

    filterSubjects() {
        if (!this.searchTerm || this.searchTerm.trim() === '') {
            this.filteredGroups = [...this.subjectGroups];
            return;
        }

        const term = this.searchTerm.toLowerCase().trim();
      this.filteredGroups = this.subjectGroups
        .map(group => ({
          area: group.area,
          subjects: group.subjects.filter(subject =>
            subject.name.toLowerCase().includes(term) ||
            subject.clave.toLowerCase().includes(term) ||
            subject.grade.toLowerCase().includes(term) ||
            group.area.toLowerCase().includes(term)
          )
        }))
        .filter(group => group.subjects.length > 0);
    }
}