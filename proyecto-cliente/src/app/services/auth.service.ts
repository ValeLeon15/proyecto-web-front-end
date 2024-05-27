import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { JwtAuthenticationResponse } from '../dto/jwt-authentication-response';
import { environment } from '../../environments/environment.development';
import { LoginDto } from '../dto/login-dto';
import { RegisterDto } from '../dto/register-dto';

const ID = 'user-id';
const JWT_TOKEN = "jwt-token";
const EMAIL = "user-email";
const ROLE = "user-role";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  private userIdSource = new BehaviorSubject<number>(0);
  private userRoleSource = new BehaviorSubject<string>('');

  userId$ = this.userIdSource.asObservable();
  userRole$ = this.userRoleSource.asObservable();

  login(loginDto: LoginDto): Observable<JwtAuthenticationResponse> {
    console.info('login', loginDto)
    return this.http.post<JwtAuthenticationResponse>(`${environment.serverUrl}/progrupo14/auth/login`, loginDto)
      .pipe(map(jwt => {
        // Importante: https://stackoverflow.com/questions/27067251/where-to-store-jwt-in-browser-how-to-protect-against-csrf
        sessionStorage.setItem(ID, jwt.id.toString());
        sessionStorage.setItem(JWT_TOKEN, jwt.token);
        sessionStorage.setItem(EMAIL, jwt.correo);
        sessionStorage.setItem(ROLE, jwt.role);
        this.userIdSource.next(jwt.id);
        this.userRoleSource.next(jwt.role);
        return jwt;
      }));
  }
  register(registerDto: RegisterDto) : Observable<JwtAuthenticationResponse>{
    console.info('register', registerDto)
    return this.http.post<JwtAuthenticationResponse>(`${environment.serverUrl}/progrupo14/auth/register`, registerDto)
      .pipe(map(jwt => {
        sessionStorage.setItem(ID, jwt.id.toString());
        sessionStorage.setItem(JWT_TOKEN, jwt.token);
        sessionStorage.setItem(EMAIL, jwt.correo);
        sessionStorage.setItem(ROLE, jwt.role);
        this.userIdSource.next(jwt.id);
        this.userRoleSource.next(jwt.role);
        return jwt;
      }));
  }
  logout() {
    sessionStorage.removeItem(ID);
    sessionStorage.removeItem(JWT_TOKEN);
    sessionStorage.removeItem(EMAIL);
    sessionStorage.removeItem(ROLE);
    this.userIdSource.next(0);
    this.userRoleSource.next('');
  }

  isAuthenticated() {
    return sessionStorage.getItem(JWT_TOKEN) != null;
  }

  token() {
    return sessionStorage.getItem(JWT_TOKEN);
  }

  role() {
    return sessionStorage.getItem(ROLE);
  }
  id(){
    return sessionStorage.getItem(ID);
  }
  loadUserFromSessionStorage() {
    const userId = +(sessionStorage.getItem('user-id') || 0);
    const userRole = sessionStorage.getItem('user-role') || '';
    this.userIdSource.next(userId);
    this.userRoleSource.next(userRole);
  }
}
