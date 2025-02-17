export interface Employee {
    personalDetails: {
      firstName: string;
      lastName: string;
      gender: string;
      dateOfBirth: Date;
      maritalStatus: string;
      nationality: string;
    };
    contactDetails: {
      email: string;
      phone: string;
      address: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
      };
    };
    employmentDetails: {
      employeeId: string;
      department: string;
      jobTitle: string;
      manager: string;
      dateOfJoining: Date;
      employmentType: string;
      salary: number;
    };
    emergencyContact: {
      name: string;
      relationship: string;
      phone: string;
      email: string;
    };
    educationDetails: {
      highestDegree: string;
      institution: string;
      yearOfGraduation: number;
    };
    bankDetails: {
      bankName: string;
      accountNumber: string;
      branchCode: string;
    };
  }