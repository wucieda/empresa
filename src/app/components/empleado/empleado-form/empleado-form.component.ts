import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-empleado-form',
  imports: [FormsModule],
  templateUrl: './empleado-form.component.html',
  styleUrl: './empleado-form.component.scss'
})
export class EmpleadoFormComponent {
  empleado = { nombre: '', email: '', telefono: '' };
  editMode = false;

  guardarEmpleado() {
    console.log('Empleado guardado:', this.empleado);
  }
}
