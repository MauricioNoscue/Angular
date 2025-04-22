export interface Rol{
   id: number,
  name: string,
  description: string,
  isDeleted: true
}

export interface Permission{
    id: number,
   name: string,
   description: string,
   isDeleted: true
 }

 
export interface Module{
    id: number,
   name: string,
   description: string,
   isDeleted: true
 }
 export interface FormEn{
    id: number,
   name: string,
   description: string,
   url: String,
   isDeleted: true
 }




 export interface RolCreacion{
    id: number,
   name: string,
   description: string,
   isDeleted: true
 }
 
 export interface PermissionCreacion{
     id: number,
    name: string,
    description: string,
    isDeleted: true
  }
 
  
 export interface ModuleCreacion{
     id: number,
    name: string,
    description: string,
    isDeleted: true
  }
  export interface FormEnCreacion{
     id: number,
    name: string,
    description: string,
    url: String,
    isDeleted: true
  }