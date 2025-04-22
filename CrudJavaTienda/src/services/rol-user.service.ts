import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Rol, rolUser, User } from '../models/rol-user.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolUserService {

  constructor() { }
  private http = inject(HttpClient);

    private urlBase = environment.apiURL + '/api/rolUser';
    private url2 =  environment.apiURL + '/api/Rol';
    private url3 =  environment.apiURL + '/api/User';


    public TraerTodo():Observable<rolUser[]>{
      return this.http.get<rolUser[]>(this.urlBase);
    }

    public TraerTodoRol():Observable<Rol[]>{
      return this.http.get<Rol[]>(this.url2);
    }
    public TraerTodoUser():Observable<User[]>{
      return this.http.get<User[]>(this.url3);
    }
  
    public obtenerPorId(id:number):Observable<rolUser>{
      return this.http.get<rolUser>(`${this.urlBase}/${id}`)
    }
    public Crear(formModule:rolUser){
      return this.http.post(this.urlBase,formModule);
    }
  
    public actualizarIdNombre( formModule:rolUser){
      return this.http.put(`${this.urlBase}`,formModule)
  
    }
    public eliminar(id: number) {
      return this.http.delete(`${this.urlBase}/permanent/${id}`);
    }

}
