import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';
import { User } from '../models/rol-user.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private http = inject(HttpClient);
  private urlBase = environment.apiURL + '/api/User';
  private urlBase2 = environment.apiURL + '/api';



  
  public TraerTodo():Observable<User[]>{
    return this.http.get<User[]>(this.urlBase);
  }

  public obtenerPorId(id:number):Observable<User>{
    return this.http.get<User>(`${this.urlBase}/${id}`)
  }
  public Crear(User:User){
    return this.http.post(this.urlBase,User);
  }

  public actualizar( User:User){
    return this.http.put(`${this.urlBase}`,User)

  }
  public eliminar(id: number) {
    return this.http.delete(`${this.urlBase}/permanent/${id}`);
  }
  public logico(id: number) {  
    return this.http.put(`${this.urlBase}/Logico/${id}`, {});  
}

public login(credentials: { email: string, password: string }) {
  return this.http.post<any>(`${this.urlBase2}/Auth/login`, credentials);
}
}
