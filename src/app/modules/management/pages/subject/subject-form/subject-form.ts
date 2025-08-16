import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FloatLabelModule } from "primeng/floatlabel";
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from "primeng/table";
import { MGrade } from '../../../../../models/nmanagement.model';
import { SubjectService } from '../../../../../services/subject/subject.service';
import { GradeService } from '../../../../../services/grade/grade.service';
import { Router } from '@angular/router';


interface Grade {
  id: number;
}

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-subject-form',
  standalone: true,
  imports: [
    CommonModule,
    FloatLabelModule,
    InputTextModule,
    TextareaModule,
    InputNumberModule,
    AutoCompleteModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    MessageModule,
    ToastModule,
    DialogModule,
    RippleModule,
    TableModule
],
  providers: [MessageService],
  templateUrl: './subject-form.html',
  styleUrls: ['./subject-form.css']
})
  
export class SubjectForm {
  subjectForm: FormGroup;
  showErrorDialog: boolean = false;
  grades: MGrade[] = [];
  filteredGrades: MGrade[] = [];
  selectedGrade: MGrade | null = null;
  loadingGrades: boolean = true;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private gradeService: GradeService,
    private subjectService: SubjectService,
    private router: Router
  ) {
    this.subjectForm = this.fb.group({
      gradeId: [null, Validators.required],
      name: ['', Validators.required],
      code: ['', Validators.required],
      description: [''],
      hoursPerWeek: [null, [Validators.required, Validators.min(1), Validators.max(20)]],
      isActive: [true],
      fieldId: [null]
    });

    this.loadGrades();
  }

onSubmit() {
  if (this.subjectForm.valid) {
    this.subjectService.createSubject(this.subjectForm.value).subscribe({
      next: (createdSubject) => {
        this.messageService.add({
          key: 'main-toast',
          severity: 'success',
          summary: 'Éxito',
          detail: `Materia "${createdSubject.name}" creada correctamente`,
          life: 3000,
          icon: 'pi pi-check-circle'
        });
        this.subjectForm.reset();
        this.subjectForm.patchValue({ isActive: true });
        this.selectedGrade = null;
      },
      error: () => {
        this.showErrorDialog = true;
      }
    });
  } else {
    this.showErrorDialog = true;
    this.subjectForm.markAllAsTouched();
  }
}

  loadGrades() {
    this.loadingGrades = true;
    this.gradeService.getGrades().subscribe({
      next: (grades) => {
        this.grades = grades;
        this.loadingGrades = false;
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudieron cargar los grados'
        });
        this.loadingGrades = false;
      }
    });
  }

  filterGrades(event: { query: string }) {
    const query = event.query.toLowerCase();
    this.filteredGrades = this.grades.filter(grade => 
      grade.name.toLowerCase().includes(query) || 
      (grade.alias && grade.alias.toLowerCase().includes(query))
    );
  }

  onGradeSelect(event: { value: MGrade }) {
    this.subjectForm.patchValue({
      gradeId: event.value.id
    });
  }

  onCancel() {
    this.subjectForm.reset();
    this.subjectForm.patchValue({ isActive: true });
    this.selectedGrade = null;
  }

  isInvalid(controlName: string): boolean {
    const control = this.subjectForm.get(controlName);
    return control ? control.invalid && (control.touched || control.dirty) : false;
  }
}