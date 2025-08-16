import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FloatLabelModule } from "primeng/floatlabel";
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ActivatedRoute, Router } from '@angular/router';
import { GradeService } from '../../../../../services/grade/grade.service';

@Component({
  selector: 'app-grade-edit',
  standalone: true,
  imports: [
    CommonModule,
    FloatLabelModule, 
    InputTextModule, 
    FormsModule, 
    ReactiveFormsModule,
    ButtonModule, 
    MessageModule, 
    ToastModule,
    DialogModule,
    RippleModule,
    InputNumberModule,
    ProgressSpinnerModule
  ],
  providers: [MessageService],
  templateUrl: 'grade-edit.html',
  styleUrl: 'grade-edit.css'
})
export class GradeEdit implements OnInit {
  gradeForm: FormGroup;
  loading: boolean = true;
  gradeId: number | null = null;
  showErrorDialog: boolean = false;

  constructor(
    private fb: FormBuilder,
    private gradeService: GradeService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.gradeForm = this.fb.group({
      name: ['', Validators.required],
      alias: ['', Validators.required],
      order_index: [1, Validators.required],
      level_id: [1, Validators.required]
    });
  }

  ngOnInit(): void {
    this.gradeId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.gradeId) {
      this.loadGrade(this.gradeId);
    } else {
      this.loading = false;
      this.router.navigate(['/management/grade-list']);
    }
  }

  loadGrade(id: number) {
    this.gradeService.getGradeById(id).subscribe({
      next: (grade) => {
        if (grade) {
          this.gradeForm.patchValue(grade);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Grado no encontrado'
          });
          this.router.navigate(['/management/grade-list']);
        }
        this.loading = false;
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error al cargar el grado'
        });
        this.router.navigate(['/management/grade-list']);
      }
    });
  }

  onSubmit() {
    if (this.gradeForm.valid && this.gradeId) {
      const updatedGrade = {
        ...this.gradeForm.value,
        id: this.gradeId,
        registration_dt: new Date(),
        deactivation_dt: null
      };

      this.gradeService.updateGrade(updatedGrade).subscribe({
        next: () => {
          this.messageService.add({
            key: 'main-toast',
            severity: 'success',
            summary: 'Éxito',
            detail: 'Grado actualizado correctamente',
            life: 2000,
            icon: 'pi pi-check-circle'
          });
          setTimeout(() => {
            this.router.navigate(['/management/grade-list']);
          }, 2000);
        },
        error: () => {
          this.showErrorDialog = true;
        }
      });
    } else {
      this.gradeForm.markAllAsTouched();
    }
  }

  isInvalid(controlName: string): boolean {
    const control = this.gradeForm.get(controlName);
    return control ? control.invalid && (control.touched || control.dirty) : false;
  }
}