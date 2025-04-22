export interface rolUser{
    id:number;
    rolId:number;
    rolName: string;
    userName:string;
    userId:number;
    isDeleted: true;
}

export interface Rol{
    id: number,
   name: string,
   description: string,
   isDeleted: true
 }

 export interface User {
    id: number;
    email: string;
    password: string;
    active: true;
    isDeleted: true;
    registrationDate: Date;
    personId: number;
    namePerson: string ;
  } 