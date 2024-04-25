import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Arrendador } from '../model/arrendador';

@Injectable({
  providedIn: 'root'
})
export class ArrendadorService {

  constructor(
    private http: HttpClient
  ) { }
  
  private headers = new HttpHeaders(
    { "Content-Type": "application/json" }
  )

  listarArrendadores(): Observable<Arrendador[]> {
    return this.http.get<Arrendador[]>(`${environment.serverUrl}/progrupo14/arrendadores`)
  }

  borrarArrendador(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.serverUrl}/progrupo14/arrendadores/${id}`)
  }

  crearArrendador(arrendador : Arrendador) : Observable<Arrendador>{
    return this.http.post<Arrendador>(`${environment.serverUrl}/progrupo14/arrendadores`, arrendador, { headers: this.headers })
  }
  
  obtenerArrendadorPorId(id: number): Observable<Arrendador> {
    return this.http.get<Arrendador>(`${environment.serverUrl}/progrupo14/arrendadores/${id}`);
  }

  actualizarArrendador(arrendador: Arrendador): Observable<Arrendador> {
    return this.http.put<Arrendador>(`${environment.serverUrl}/progrupo14/arrendadores`, arrendador, { headers: this.headers });
  }

}
