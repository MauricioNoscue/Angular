import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService<T> {

  constructor() { }
  private http = inject(HttpClient);
  private urlBase = environment.apiURL + '/api';

  public getAll(endpoint: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.urlBase}/${endpoint}`);
  }

  public getById(endpoint: string, id: number): Observable<T> {
    return this.http.get<T>(`${this.urlBase}/${endpoint}/${id}`);
  }

  public create(endpoint: string, item: Partial<T>): Observable<any> {
    return this.http.post(`${this.urlBase}/${endpoint}`, item);
  }

  public update(endpoint: string, item: T): Observable<any> {
    return this.http.put(`${this.urlBase}/${endpoint}`, item);
  }

  public delete(endpoint: string, id: number): Observable<any> {
    return this.http.delete(`${this.urlBase}/${endpoint}/permanent/${id}`);
  }
  public logicalDelete(endpoint: string, id: number): Observable<any> {
    return this.http.put(`${this.urlBase}/${endpoint}/logico/${id}`, null);
  }

  /** Actualizar isDeleted con PATCH api/{endpoint}/{id} */
  public patchIsDeleted(endpoint: string, id: number): Observable<any> {
    return this.http.patch(`${this.urlBase}/${endpoint}/${id}`, null);
  }
}
