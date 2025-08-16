import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
    <h2>Gestión de Usuarios</h2>
    <p>Administra los usuarios del sistema.</p>
    <table style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr style="background: #e0e0e0;">
          <th style="padding: 8px; border: 1px solid #ddd;">ID</th>
          <th style="padding: 8px; border: 1px solid #ddd;">Nombre</th>
          <th style="padding: 8px; border: 1px solid #ddd;">Rol</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;">1</td>
          <td style="padding: 8px; border: 1px solid #ddd;">Usuario Ejemplo</td>
          <td style="padding: 8px; border: 1px solid #ddd;">Admin</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class Users {}