import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule,CommonModule ], 
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  animations: [
    trigger('fadeInDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('200ms ease-out', 
                style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', 
                style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class Header {
  showUserMenu: boolean = false;
items: any;
  
  constructor(private router: Router) {}

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
  }

  selectUserType(userType: string) {
    this.showUserMenu = false;
    this.router.navigate(['/login', { userType }]);
  }
}