import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <h2>Dashboard</h2>
    <p>Bienvenido al panel de control. Aquí puedes ver estadísticas importantes.</p>
    <div style="background: #f0f0f0; padding: 20px; border-radius: 5px;">
      <p>📊 Gráficos y métricas irían aquí.</p>
    </div>
  `,
  styles: []
})
export class Dashboard {}