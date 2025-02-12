import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { inject } from '@angular/core';
import { Laptop, LaptopCreacion } from './laptops.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  constructor() { }
 private http = inject(HttpClient);
  private urlBase = environment.apiURL + '/api/laptops';


  public Login(laptop:LaptopCreacion){
    return this.http.post(`${this.urlBase}/login`,laptop);
  }


  public TraerTodo():Observable<Laptop[]>{
    return this.http.get<Laptop[]>(this.urlBase);
  }

  public obtenerPorId(id:number):Observable<Laptop>{
    return this.http.get<Laptop>(`${this.urlBase}/${id}`)
  }
  public Crear(laptop:LaptopCreacion){
    return this.http.post(this.urlBase,laptop);
  }

  public actualizarIdNombre(id:number, laptop:LaptopCreacion){
    return this.http.put(`${this.urlBase}/${id}`,laptop)

  }
  public eliminar(id:number){
    return this.http.delete(`${this.urlBase}/${id}`)
  }
}

