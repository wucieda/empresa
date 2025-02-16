import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleado-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './empleado-list.component.html',
  styleUrl: './empleado-list.component.scss'
})
export class EmpleadoListComponent {
  empleados = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan@peres.com', telefono: 164654 },
    { id: 2, nombre: 'María López', email: 'juan@peres.com', telefono: 164654 }
  ];

  abrirModal(id: number) {
    console.log(`Eliminar empleado con ID: ${id}`);
  }
}
