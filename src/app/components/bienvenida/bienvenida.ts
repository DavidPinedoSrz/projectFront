import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [DividerModule, ButtonModule],
  templateUrl: './bienvenida.html',
  styleUrls: ['./bienvenida.css']
})
export class Bienvenida {}