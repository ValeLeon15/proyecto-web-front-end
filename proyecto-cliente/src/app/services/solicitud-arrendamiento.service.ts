import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { solicitudArrendamiento } from '../model/solicitudArrendamiento';

@Injectable({
  providedIn: 'root'
})
export class SolicitudArrendamientoService {

  constructor(
    private http: HttpClient
  ) { }
  
  private headers = new HttpHeaders(
    { "Content-Type": "application/json" }
  )

  listarSolicitudesPorArrendatario(id: number): Observable<solicitudArrendamiento[]> {
    return this.http.get<solicitudArrendamiento[]>(`${environment.serverUrl}/progrupo14/solicitudarrendamiento/arrendatario/${id}`)
  }

  getSolicitudArrendamiento(id: number): Observable<solicitudArrendamiento> {
    return this.http.get<solicitudArrendamiento>(`${environment.serverUrl}/progrupo14/solicitudarrendamiento/${id}`)
  }

  listarSolicitudesArrendamiento(): Observable<solicitudArrendamiento[]> {
    return this.http.get<solicitudArrendamiento[]>(`${environment.serverUrl}/progrupo14/solicitudarrendamiento`)
  }

  crearSolicitud(solicitud: solicitudArrendamiento, idPropiedad: number, idArrendatario: number): Observable<solicitudArrendamiento> {
    return this.http.post<solicitudArrendamiento>(`${environment.serverUrl}/progrupo14/solicitudarrendamiento/${idPropiedad}/${idArrendatario}`, solicitud, { headers: this.headers })
  }

  actualizarSolicitud(solicitud: solicitudArrendamiento): Observable<solicitudArrendamiento> {
    return this.http.put<solicitudArrendamiento>(`${environment.serverUrl}/progrupo14/solicitudarrendamiento`, solicitud, { headers: this.headers })
  }

  eliminarSolicitud(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.serverUrl}/progrupo14/solicitudarrendamiento/${id}`)
  }
}
