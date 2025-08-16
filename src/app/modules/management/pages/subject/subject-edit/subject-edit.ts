import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FloatLabelModule } from "primeng/floatlabel";
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from '../../../../../services/subject/subject.service';
import { MSubject } from '../../../../../models/nmanagement.model';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-subject-edit',
  standalone: true,
  imports: [
    CommonModule,
    FloatLabelModule,
    InputTextModule,
    TextareaModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    MessageModule,
    ToastModule,
    DialogModule,
    RippleModule,
    ProgressSpinnerModule,
    CheckboxModule
  ],
  providers: [MessageService],
  templateUrl: './subject-edit.html',
  styleUrls: ['./subject-edit.css']
})
export class SubjectEdit implements OnInit {
  subjectForm: FormGroup;
  showErrorDialog: boolean = false;
  loading: boolean = true;
  subjectId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private subjectService: SubjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.subjectForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      description: [''],
      hoursPerWeek: [null, [Validators.required, Validators.min(1), Validators.max(20)]],
      gradeId: [null, Validators.required],
      isActive: [true],
      fieldId: [null]
    });
  }

  ngOnInit(): void {
    this.subjectId = Number(this.route.snapshot.paramMap.get('id'));
    
    if (this.subjectId) {
      this.subjectService.getSubjectById(this.subjectId).subscribe({
        next: (subject) => {
          if (subject) {
            this.subjectForm.patchValue(subject);
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'No se encontró la materia solicitada'
            });
            this.router.navigate(['/management/subject-list']);
          }
          this.loading = false;
        },
        error: () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error al cargar la materia'
          });
          this.router.navigate(['/management/subject-list']);
        }
      });
    } else {
      this.loading = false;
    }
  }

  onSubmit() {
    if (this.subjectForm.valid && this.subjectId) {
      const updatedSubject: MSubject = {
        ...this.subjectForm.value,
        id: this.subjectId,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      this.subjectService.updateSubject(updatedSubject).subscribe({
        next: () => {
          this.messageService.add({
            key: 'main-toast',
            severity: 'success',
            summary: 'Éxito',
            detail: 'La materia se actualizó correctamente',
            life: 2000,
            icon: 'pi pi-check-circle'
          });
          setTimeout(() => {
            this.router.navigate(['/management/subject-list']);
          }, 2000);
        },
        error: () => {
          this.showErrorDialog = true;
        }
      });
    } else {
      this.subjectForm.markAllAsTouched();
    }
  }

  isInvalid(controlName: string): boolean {
    const control = this.subjectForm.get(controlName);
    return control ? control.invalid && (control.touched || control.dirty) : false;
  }
}