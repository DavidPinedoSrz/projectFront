import { Component } from '@angular/core';
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
import { GradeService } from '../../../../../services/grade/grade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grade-form',
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
    RippleModule
  ],
  providers: [MessageService],
  templateUrl: 'grade-form.html',
  styleUrl: 'grade-form.css'
})
export class GradeForm {
  gradeForm: FormGroup;
  showErrorDialog: boolean = false;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private gradeService: GradeService,
    private router: Router
  ) {
    this.gradeForm = this.fb.group({
      gradeName: ['', Validators.required],
      alias: ['', Validators.required],
      order_index: [1, Validators.required],
      level_id: [1, Validators.required]
    });
  }

  onSubmit() {
    if (this.gradeForm.valid) {
      this.gradeService.createGrade(this.gradeForm.value).subscribe({
        next: (createdGrade) => {
          this.messageService.add({
            key: 'main-toast',
            severity: 'success',
            summary: 'Éxito',
            detail: `Grado "${createdGrade.name}" creado con ID: ${createdGrade.id}`,
            life: 3000,
            icon: 'pi pi-check-circle'
          });
          this.gradeForm.reset();
          // Redirigir después de 2 segundos
          setTimeout(() => {
            this.router.navigate(['/management/grade-list']);
          }, 2000);
        },
        error: () => {
          this.showErrorDialog = true;
        }
      });
    } else {
      this.showErrorDialog = true;
      this.gradeForm.markAllAsTouched();
    }
  }

  isInvalid(controlName: string): boolean {
    const control = this.gradeForm.get(controlName);
    return control ? control.invalid && (control.touched || control.dirty) : false;
  }
}