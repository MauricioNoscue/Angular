export interface User {
    id: number;
    email: string;
    password: string;
    active: true;
    isDeleted: true;
    registrationDate: Date;
    personId: number;
    namePerson: string;
  }