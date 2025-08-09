import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PasswordModule } from 'primeng/password'; // Importa PasswordModule
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    PasswordModule, 
    InputTextModule,
    ButtonModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  userType: string = 'regular';
  loginTitle: string = 'Inicio de Sesión Usuario Regular';
  customStyle: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userType = params['userType'] || 'regular';
      
      if(this.userType === 'admin') {
        this.loginTitle = 'Acceso Administrativo';
        this.customStyle = 'bg-blue-50 border-l-4 border-blue-500';
      } else {
        this.loginTitle = 'Inicio de Sesión Usuario Regular';
        this.customStyle = 'bg-gray-50 border-l-4 border-gray-300';
      }
    });
  }
}