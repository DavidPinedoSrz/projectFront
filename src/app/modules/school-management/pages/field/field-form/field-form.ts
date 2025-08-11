import { Component, OnInit } from '@angular/core';
import { Field } from '../../../../../interfaces/iField';
import { FieldService } from '../../../../../services/field/field.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select'; 
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AcademicLevelService } from '../../../../../services/academic-level/academic-level.service';

@Component({
  selector: 'app-field-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    DatePickerModule,
    SelectModule, 
    ButtonModule,
    CardModule,
    ToastModule,
    DatePipe
  ],
  templateUrl: './field-form.html',
  styleUrls: ['./field-form.css'],
  providers: [MessageService]
})
export class FieldForm implements OnInit {
  fieldForm!: FormGroup;
  isEditMode = false;
  currentFieldId?: number;
  academicLevels: any[] = [];

  constructor(
    private fb: FormBuilder,
    private fieldService: FieldService,
    private academicLevelService: AcademicLevelService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.initForm();
    this.loadAcademicLevels();
    this.checkEditMode();
  }

  initForm() {
    this.fieldForm = this.fb.group({
      name: ['', Validators.required],
      level_id: [null, Validators.required],
      index: [0, Validators.min(0)],
      specialization: [false],
      registration_dt: [new Date(), Validators.required],
      deactivation_dt: [null]
    });
  }

  loadAcademicLevels() {
    this.academicLevels = this.academicLevelService.getAllAcademicLevels().map(level => ({
      label: level.name,
      value: level.id
    }));
  }

  checkEditMode() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEditMode = true;
      this.currentFieldId = +id;
      this.loadFieldData(this.currentFieldId);
    }
  }

  loadFieldData(id: number) {
    const field = this.fieldService.getFieldById(id);
    if (field) {
      this.fieldForm.patchValue({
        ...field,
        level_id: field.level_id
      });
    }
  }

  onSubmit() {
    if (this.fieldForm.invalid) {
      this.fieldForm.markAllAsTouched();
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Por favor complete todos los campos requeridos'
      });
      return;
    }

    const fieldData: Field = {
      id: this.isEditMode ? this.currentFieldId! : 0,
      ...this.fieldForm.value
    };

    if (this.isEditMode) {
      this.updateField(fieldData);
    } else {
      this.createField(fieldData);
    }
  }

  createField(field: Field) {
    const result = this.fieldService.addField(field);
    if (result) {
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Campo formativo creado correctamente'
      });
      this.router.navigate(['/school-management/fields']);
    }
  }

  updateField(field: Field) {
    const result = this.fieldService.updateField(field.id, field);
    if (result) {
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Campo formativo actualizado correctamente'
      });
      this.router.navigate(['/school-management/fields']);
    }
  }
}