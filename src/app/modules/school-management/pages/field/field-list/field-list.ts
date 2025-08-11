import { Component } from '@angular/core';
import { Field } from '../../../../../interfaces/iField';
import { TableModule } from 'primeng/table';
import { CommonModule, DatePipe } from '@angular/common';
import { FieldService } from '../../../../../services/field/field.service';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-field-list',
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    DatePipe,
    ButtonModule,
    RouterModule,
    TagModule,
    ConfirmDialogModule,
    ToastModule
  ],
  templateUrl: './field-list.html',
  styleUrls: ['./field-list.css'],
  providers: [ConfirmationService, MessageService]
})
export class FieldList {
  fields!: Field[];
  cols!: any[];
  loading: boolean = true;

  constructor(
    private fieldService: FieldService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.loadFields();
    this.initColumns();
  }

  loadFields() {
    this.loading = true;
    this.fields = this.fieldService.getAllFields();
    this.loading = false;
  }

  initColumns() {
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Nombre' },
      { field: 'level_id', header: 'Nivel' },
      { field: 'specialization', header: 'Especialización' },
      { field: 'registration_dt', header: 'Fecha Registro' },
      { field: 'status', header: 'Estado' },
      { field: 'actions', header: 'Acciones' }
    ];
  }

  confirmDelete(id: number) {
    this.confirmationService.confirm({
      message: '¿Estás seguro de eliminar este campo formativo?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      rejectLabel: 'No',
      accept: () => {
        this.deleteField(id);
      }
    });
  }

  deleteField(id: number) {
    const success = this.fieldService.deleteField(id);
    if (success) {
      this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Campo formativo eliminado'
      });
      this.loadFields();
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se pudo eliminar el campo formativo'
      });
    }
  }

  getStatusTag(field: Field) {
    return field.deactivation_dt ? 'danger' : 'success';
  }

  getStatusText(field: Field) {
    return field.deactivation_dt ? 'Inactivo' : 'Activo';
  }
}