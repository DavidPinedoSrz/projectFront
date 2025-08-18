import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { DatePickerModule } from 'primeng/datepicker';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grade-form-component',
  templateUrl: './grade-form.component.html',
  standalone: true,
  imports: [
    CommonModule,
    Dialog,
    ButtonModule,
    InputTextModule,
    FloatLabel,
    DatePickerModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class GradeFormComponent {
  @Input() showDialog: boolean = false;
  @Output() dialogHide = new EventEmitter<void>();
  visible: boolean = false;

  gradeForm: FormGroup;
  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {
    this.gradeForm = this.fb.group({
      nombre: ['', [Validators.required]],
      alias: ['', [Validators.required]],
      fecha: ['', Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['showDialog'] && this.showDialog) {
      this.visible = true;
      this.resetForm();
    }
  }

  onHide() {
    this.dialogHide.emit();
  }

  onSubmit() {
    this.formSubmitted = true;
    
    if (this.gradeForm.valid) {
      // Mostrar datos en consola
      console.log('Datos del formulario:', this.gradeForm.value);
      
      // Mostrar notificación
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Grado creado correctamente',
        life: 3000
      });
      
      // Cerrar diálogo
      this.visible = false;
      this.resetForm();
    } else {
      // Mostrar errores
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Por favor complete todos los campos correctamente',
        life: 3000
      });
    }
  }

  resetForm() {
    this.gradeForm.reset();
    this.formSubmitted = false;
  }

  // Helper para acceder fácil a los controles
  get f() {
    return this.gradeForm.controls;
  }
}