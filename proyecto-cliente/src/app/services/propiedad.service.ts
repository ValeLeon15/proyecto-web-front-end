import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Propiedad } from '../model/propiedad';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {
  constructor(
    private http: HttpClient
  ) { }
  
  private headers = new HttpHeaders(
    { "Content-Type": "application/json" }
  )

  crearPropiedad(propiedad : Propiedad) : Observable<Propiedad>{
    return this.http.post<Propiedad>(`${environment.serverUrl}/progrupo14/propiedad`, propiedad, { headers: this.headers })
  }

  actualizarPropiedad(propiedad: Propiedad) : Observable<Propiedad>{ 
    return this.http.put<Propiedad>(`${environment.serverUrl}/progrupo14/propiedad`, Propiedad, { headers: this.headers })
  }

  listarPropiedades(): Observable<Propiedad[]> {
    return this.http.get<Propiedad[]>(`${environment.serverUrl}/progrupo14/propiedad`)
  }

  listarPropiedadesPorArrendador(id: number): Observable<Propiedad[]> {
    return this.http.get<Propiedad[]>(`${environment.serverUrl}/progrupo14/propiedad/arrendador/${id}`);
  }
  
  buscarPropiedad(id: number): Observable<Propiedad> {
    return this.http.get<Propiedad>(`${environment.serverUrl}/progrupo14/propiedad/${id}`);
  }

  borrarPropiedad(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.serverUrl}/progrupo14/propiedad/${id}`)
  }

}
