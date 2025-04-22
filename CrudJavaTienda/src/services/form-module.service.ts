import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Form, formModule, Module } from '../models/form-module.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormModuleService {

  constructor() { }
  private http = inject(HttpClient);
  private urlBase = environment.apiURL + '/api/formModule';
  private url2 =  environment.apiURL + '/api/form';
  private url3 =  environment.apiURL + '/api/module';


  
    public TraerTodo():Observable<formModule[]>{
      return this.http.get<formModule[]>(this.urlBase);
    }

    public TraerTodoForm():Observable<Form[]>{
      return this.http.get<Form[]>(this.url2);
    }
    public TraerTodoModule():Observable<Module[]>{
      return this.http.get<Module[]>(this.url3);
    }
  
    public obtenerPorId(id:number):Observable<formModule>{
      return this.http.get<formModule>(`${this.urlBase}/${id}`)
    }
    public Crear(formModule:formModule){
      return this.http.post(this.urlBase,formModule);
    }
  
    public actualizarIdNombre( formModule:formModule){
      return this.http.put(`${this.urlBase}`,formModule)
  
    }
    public eliminar(id: number) {
      return this.http.delete(`${this.urlBase}/permanent/${id}`);
    }
}
