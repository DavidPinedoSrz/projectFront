import { Component, EventEmitter, Input, Output, SimpleChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { DatePickerModule } from 'primeng/datepicker';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { Select } from 'primeng/select';


export interface MGrade {
id: number;
name: string;
}

export interface MTraining_Areas {
  id: number;
  level_id: number;
  index: number | null;
  name: string;
  registration_dt: Date;
  deactivation_dt: Date | null;
  specialization: number;
}

export interface MSubject_Type {
  id: number;
  name: string;
  registration_dt: Date;
  deactivation_dt: Date | null;
}

export interface MOptative {
id: number;
name: string;
}

export interface MWorkshops {
id: number;
name: string;
registration_dt: Date;
deactivation_dt: Date | null;
}

@Component({
  selector: 'app-subject-form-component',
  templateUrl: './subject-form.component.html',
  styleUrl: './subject-form.component.css',
  imports: [
    CommonModule,
    Dialog,
    ButtonModule,
    InputTextModule,
    FloatLabel,
    DatePickerModule,
    ReactiveFormsModule,
    ToastModule,
    Select,
  ],
  providers: [MessageService]
})
export class SubjectFormComponent implements OnInit {
  @Input() showDialog: boolean = false;
  @Output() dialogHide = new EventEmitter<void>();
  visible: boolean = false;

  gradeForm: FormGroup;
  formSubmitted = false;

  grades: MGrade[] | undefined = [];
  selectGrades: MGrade | undefined;

  trainingAreas: MTraining_Areas[] | undefined = [];
  selectTrainingAreas: MTraining_Areas | undefined;



  subjectTypes: MSubject_Type[] | undefined = [];
  selectSubjectTypes: MSubject_Type | undefined;

  optative: MOptative[] | undefined = [];
  selectOptative: MOptative | undefined;

  
  workshops: MWorkshops[] | undefined = [];
  selectworkshops: MWorkshops | undefined;

  
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {
      this.gradeForm = this.fb.group({
      nombre: ['', [Validators.required]],
      clave: ['', [Validators.required]],
      gradeId: ['', [Validators.required]],
      training_areas_id: ['', [Validators.required]],
      subject_type_id: ['', [Validators.required]],
      optative_group: ['', [Validators.required]],
      workshop_id: ['', [Validators.required]],
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

  ngOnInit() {
    this.grades = [
  {
    id: 1,
    name: "Primero"
  },
  {
    id: 2,
    name: "Segundo"
  },
  {
    id: 3,
    name: "Tercero"
  }
];
  this.trainingAreas = [
  {
    id: 1,
    level_id: 4,
    index: null,
    name: "Tronco Común",
    registration_dt: new Date("2024-10-03T17:52:48"),
    deactivation_dt: null,
    specialization: 0
  },
  {
    id: 2,
    level_id: 4,
    index: null,
    name: "Area I",
    registration_dt: new Date("2024-10-03T17:52:48"),
    deactivation_dt: null,
    specialization: 1
  },
  {
    id: 3,
    level_id: 4,
    index: null,
    name: "Area II",
    registration_dt: new Date("2024-10-03T17:52:48"),
    deactivation_dt: null,
    specialization: 1
  },
  {
    id: 4,
    level_id: 4,
    index: null,
    name: "Area III",
    registration_dt: new Date("2024-10-03T17:52:48"),
    deactivation_dt: null,
    specialization: 1
  },
  {
    id: 5,
    level_id: 4,
    index: null,
    name: "Area IV",
    registration_dt: new Date("2024-10-03T17:52:48"),
    deactivation_dt: null,
    specialization: 1
  },
  {
    id: 6,
    level_id: 3,
    index: null,
    name: "Autonomía Curricular",
    registration_dt: new Date("2025-02-20T15:49:18"),
    deactivation_dt: null,
    specialization: 0
  },
  {
    id: 7,
    level_id: 3,
    index: null,
    name: "De Lo Humano Y Lo Comunitario",
    registration_dt: new Date("2025-02-20T15:49:18"),
    deactivation_dt: null,
    specialization: 0
  },
  {
    id: 8,
    level_id: 3,
    index: null,
    name: "Ética, Naturaleza Y Sociedades",
    registration_dt: new Date("2025-02-20T15:49:18"),
    deactivation_dt: null,
    specialization: 0
  },
  {
    id: 9,
    level_id: 3,
    index: null,
    name: "Lenguajes",
    registration_dt: new Date("2025-02-20T15:49:18"),
    deactivation_dt: null,
    specialization: 0
  },
  {
    id: 10,
    level_id: 3,
    index: null,
    name: "Saberes Y Pensamiento Científico",
    registration_dt: new Date("2025-02-20T15:49:18"),
    deactivation_dt: null,
    specialization: 0
  },
  {
    id: 11,
    level_id: 2,
    index: null,
    name: "Lenguajes",
    registration_dt: new Date("2025-02-20T17:05:15"),
    deactivation_dt: null,
    specialization: 0
  },
  {
    id: 12,
    level_id: 2,
    index: null,
    name: "De Lo Humano A Lo Comunitario",
    registration_dt: new Date("2025-02-20T17:05:15"),
    deactivation_dt: null,
    specialization: 0
  },
  {
    id: 13,
    level_id: 2,
    index: null,
    name: "Ética, Naturaleza Y Sociedad",
    registration_dt: new Date("2025-02-20T17:05:15"),
    deactivation_dt: null,
    specialization: 0
  },
  {
    id: 14,
    level_id: 2,
    index: null,
    name: "Materia Institucional",
    registration_dt: new Date("2025-02-20T17:05:15"),
    deactivation_dt: null,
    specialization: 0
  },
  {
    id: 15,
    level_id: 2,
    index: null,
    name: "Saberes Y Pensamiento Científico",
    registration_dt: new Date("2025-02-20T17:05:15"),
    deactivation_dt: null,
    specialization: 0
  },
  {
    id: 16,
    level_id: 1,
    index: null,
    name: "De Lo Humano A Lo Comunitario",
    registration_dt: new Date("2025-02-20T18:57:37"),
    deactivation_dt: null,
    specialization: 0
  },
  {
    id: 17,
    level_id: 1,
    index: null,
    name: "Ética, Naturaleza Y Sociedades",
    registration_dt: new Date("2025-02-20T18:57:37"),
    deactivation_dt: null,
    specialization: 0
  },
  {
    id: 18,
    level_id: 1,
    index: null,
    name: "Lenguajes",
    registration_dt: new Date("2025-02-20T18:57:37"),
    deactivation_dt: null,
    specialization: 0
  },
  {
    id: 19,
    level_id: 1,
    index: null,
    name: "Saberes Y Pensamiento Científico",
    registration_dt: new Date("2025-02-20T18:57:37"),
    deactivation_dt: null,
    specialization: 0
  }
];
   this.subjectTypes = [
   {
     id: 1,
     name: "Teóricas",
     registration_dt: new Date("2024-10-03T17:52:48"),
     deactivation_dt: null
   },
   {
     id: 2,
     name: "Prácticas",
     registration_dt: new Date("2024-10-03T17:52:48"),
     deactivation_dt: null
   }
    ];
    this.optative = [
  {
    id: 1,
    name: "Si"
  },
  {
    id: 2,
    name: "No"
  }
];
    this.workshops = [
  {
    id: 1,
    name: "Danza",
    registration_dt: new Date("2024-10-03T17:52:48"),
    deactivation_dt: null
  },
  {
    id: 2,
    name: "Música",
    registration_dt: new Date("2024-10-03T17:52:48"),
    deactivation_dt: null
  },
  {
    id: 3,
    name: "Pintura",
    registration_dt: new Date("2024-10-03T17:52:48"),
    deactivation_dt: null
  },
  {
    id: 4,
    name: "Teatro",
    registration_dt: new Date("2025-02-20T15:47:35"),
    deactivation_dt: null
  },
  {
    id: 5,
    name: "Visuales",
    registration_dt: new Date("2025-02-20T15:47:35"),
    deactivation_dt: null
  }
];
     }

}