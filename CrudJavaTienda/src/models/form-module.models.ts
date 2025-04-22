export interface formModule{
    id: number,
    formId: number,
    moduleName: string,
    formName: string,
    moduleId: number,
    isDeleted: true
}

 
export interface Module{
    id: number,
   name: string,
   description: string,
   isDeleted: true
 }
 export interface Form{
    id: number,
   name: string,
   description: string,
   url: String,
   isDeleted: true
 }
