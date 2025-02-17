import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-empleado-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './empleado-list.component.html',
  styleUrl: './empleado-list.component.scss'
})
export class EmpleadoListComponent {
  selectedEmployee: Employee | null = null;
  employees: Employee[] = [
    {
      personalDetails: {
        firstName: 'John',
        lastName: 'Doe',
        gender: 'Male',
        dateOfBirth: new Date('1990-01-01'),
        maritalStatus: 'Single',
        nationality: 'American'
      },
      contactDetails: {
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        address: {
          street: '123 Main St',
          city: 'New York',
          state: 'NY',
          zipCode: '10001',
          country: 'USA'
        }
      },
      employmentDetails: {
        employeeId: 'EMP001',
        department: 'IT',
        jobTitle: 'Software Engineer',
        manager: 'Jane Smith',
        dateOfJoining: new Date('2020-01-01'),
        employmentType: 'Full-Time',
        salary: 75000
      },
      emergencyContact: {
        name: 'Jane Doe',
        relationship: 'Spouse',
        phone: '987-654-3210',
        email: 'jane.doe@example.com'
      },
      educationDetails: {
        highestDegree: 'Bachelor\'s',
        institution: 'University of New York',
        yearOfGraduation: 2012
      },
      bankDetails: {
        bankName: 'Bank of America',
        accountNumber: '123456789',
        branchCode: 'BOFAUS3N'
      }
    }
    // Agrega más empleados aquí...
  ];
  viewDetails(employee: Employee): void {
    this.selectedEmployee = employee;
  }
  abrirModal(id: number) {
    console.log(`Eliminar empleado con ID: ${id}`);
  }
}
