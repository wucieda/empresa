import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-eliminar-empleado',
  imports: [],
  templateUrl: './modal-eliminar-empleado.component.html',
  styleUrl: './modal-eliminar-empleado.component.scss'
})
export class ModalEliminarEmpleadoComponent {
  mostrar = false;

  confirmarEliminacion() {
    console.log('Empleado eliminado');
    this.mostrar = false;
  }

  cerrarModal() {
    this.mostrar = false;
  }
}
