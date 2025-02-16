import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empleado-detail',
  imports: [RouterLink],
  templateUrl: './empleado-detail.component.html',
  styleUrl: './empleado-detail.component.scss'
})
export class EmpleadoDetailComponent {
  empleado = { nombre: 'Juan Pérez', email: 'juan@example.com', telefono: '123456789' };
}
