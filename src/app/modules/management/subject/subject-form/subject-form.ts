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
    DialogModule,
    RippleModule
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
    // Nueva expresión regular que permite:
    // - Letras (mayúsculas y minúsculas)
    // - Números
    // - Acentos y caracteres especiales en español (ñ, Ñ, á, é, í, ó, ú, ü)
    // - Espacios
    const textPattern = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑüÜ\s]+$/;
    
    this.subjectForm = this.fb.group({
      subjectName: ['', [Validators.required, Validators.pattern(textPattern)]],
      alias: ['', [Validators.required, Validators.pattern(textPattern)]]
    });
  }

  onSubmit() {
    if (this.subjectForm.valid) {
      this.messageService.add({
        key: 'main-toast',
        severity: 'success',
        summary: 'Éxito',
        detail: 'La materia se creó correctamente',
        life: 3000,
        icon: 'pi pi-check-circle'
      });
      this.subjectForm.reset();
    } else {
      this.showErrorDialog = true;
      this.subjectForm.markAllAsTouched();
    }
  }

  isInvalid(controlName: string): boolean {
    const control = this.subjectForm.get(controlName);
    return control ? control.invalid && (control.touched || control.dirty) : false;
  }
}