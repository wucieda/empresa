import { Component, Input } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-empleado-detail',
  imports: [ CommonModule],
  templateUrl: './empleado-detail.component.html',
  styleUrl: './empleado-detail.component.scss'
})
export class EmpleadoDetailComponent {
  @Input() employee: Employee | null = null;
}
