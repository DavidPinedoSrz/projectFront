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

@Component({
  selector: 'app-subject-form',
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
    DialogModule
  ],
  providers: [MessageService],
  templateUrl: './subject-form.html',
  styleUrl: './subject-form.css'
})
export class SubjectForm {
  subjectForm: FormGroup;
  showErrorDialog: boolean = false;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {
    this.subjectForm = this.fb.group({
      subjectName: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)]],
      alias: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)]]
    });
  }

  onSubmit() {
    if (this.subjectForm.valid) {
      // Lógica para guardar la materia
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'La materia se cargó correctamente',
        life: 3000
      });
      this.subjectForm.reset();
    } else {
      this.showErrorDialog = true;
      // Marcar todos los campos como tocados para mostrar errores
      this.subjectForm.markAllAsTouched();
    }
  }

  isInvalid(controlName: string): boolean {
    const control = this.subjectForm.get(controlName);
    return control ? control.invalid && (control.touched || control.dirty) : false;
  }
}