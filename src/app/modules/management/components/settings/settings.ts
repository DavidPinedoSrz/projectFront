import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  template: `
    <h2>Configuración</h2>
    <p>Ajustes del sistema.</p>
    <div style="background: #f9f9f9; padding: 20px; border-radius: 5px;">
      <h3>Preferencias</h3>
      <ul>
        <li>🌐 Idioma: Español</li>
        <li>🔔 Notificaciones: Activadas</li>
      </ul>
      <button style="padding: 8px 16px; background: #1976d2; color: white; border: none; border-radius: 4px;">
        Guardar cambios
      </button>
    </div>
  `,
  styles: []
})
export class Settings {}