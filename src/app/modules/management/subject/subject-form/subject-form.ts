import { Component, inject } from '@angular/core';
import { FloatLabelModule } from "primeng/floatlabel"
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { MessageModule } from 'primeng/message';


import { Dialog } from 'primeng/dialog';

import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-subject-form',
  imports: [FloatLabelModule, InputTextModule, FormsModule, Toast, ButtonModule, DrawerModule, Dialog, MessageModule, ReactiveFormsModule],
  providers: [MessageService],
  templateUrl: './subject-form.html',
  styleUrl: './subject-form.css'
})
export class SubjectForm {
  value: string | undefined;
  //messages: Message[] = [];
  visible: boolean = false;
  messages = "";

  visible2: boolean = false;


   messageService = inject(MessageService);

    show() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }
  
  
    position: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright' = 'center';

    showDialog(position: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright') {
        this.position = position;
        this.visible2 = true;
    }
  
  
  exampleForm: FormGroup;

    formSubmitted = false;

    constructor(private fb: FormBuilder) {
        this.exampleForm = this.fb.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
        });
    }

    onSubmit() {
        this.formSubmitted = true;
        if (this.exampleForm.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
            this.exampleForm.reset();
            this.formSubmitted = false;
        }
    }

    isInvalid(controlName: string) {
        const control = this.exampleForm.get(controlName);
        return control?.invalid && (control.touched || this.formSubmitted);
    }
  
  
}
