import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AppSettins } from '../settings/appsettings';
import { Empleado } from '../models/Empleado';
import { ResponseApi } from '../models/ResponseApi';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private http = inject(HttpClient);
  private apiUrl:string = AppSettins.apiURL+"Empleado";

  constructor() {}

  lista(){
    return this.http.get<Empleado[]>(this.apiUrl)
  }

  obtener(id:number){
    return this.http.get<Empleado[]>(`${this.apiUrl}/${id}`);
  }

  crear(objeto:Empleado){
    return this.http.post<ResponseApi>(this.apiUrl,objeto);
  }

  actualizar(objeto:Empleado){
    return this.http.put<ResponseApi>(this.apiUrl,objeto);
  }
  eliminar(id:number){
    return this.http.delete<ResponseApi>(`${this.apiUrl}/${id}`);
  }
}
