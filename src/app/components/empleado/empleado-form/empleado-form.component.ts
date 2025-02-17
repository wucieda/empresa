import { Component } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {CommonModule} from '@angular/common'


@Component({
  selector: 'app-empleado-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,
    CommonModule
  ],
  templateUrl: './empleado-form.component.html',
  styleUrl: './empleado-form.component.scss'
})
export class EmpleadoFormComponent {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      personalDetails: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        gender: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        maritalStatus: ['', Validators.required],
        nationality: ['', Validators.required],
      }),
      contactDetails: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        address: this.fb.group({
          street: ['', Validators.required],
          city: ['', Validators.required],
          state: ['', Validators.required],
          zipCode: ['', Validators.required],
          country: ['', Validators.required],
        }),
      }),
      employmentDetails: this.fb.group({
        employeeId: ['', Validators.required],
        department: ['', Validators.required],
        jobTitle: ['', Validators.required],
        manager: [''],
        dateOfJoining: ['', Validators.required],
        employmentType: ['', Validators.required],
        salary: ['', Validators.required],
      }),
      emergencyContact: this.fb.group({
        name: ['', Validators.required],
        relationship: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
      }),
      educationDetails: this.fb.group({
        highestDegree: ['', Validators.required],
        institution: ['', Validators.required],
        yearOfGraduation: ['', Validators.required],
      }),
      bankDetails: this.fb.group({
        bankName: ['', Validators.required],
        accountNumber: ['', Validators.required],
        branchCode: ['', Validators.required],
      }),
    });
  }


  onSubmit(): void {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
