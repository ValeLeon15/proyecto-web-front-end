import { Component } from '@angular/core';
import { LoginDto } from '../dto/login-dto';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginDto: LoginDto = new LoginDto("", "");

  constructor(private auth: AuthService, private router: Router) { }
  
  ngOnInit(): void {
    this.auth.logout();
  }

  login() {
    this.auth.login(this.loginDto)
      .subscribe({
        next: jwt => {
          console.log(jwt);
          if(jwt.role === "ARRENDADOR"){
            this.router.navigateByUrl("/propiedades/arrendador/"+jwt.id);
          }
          else{
            this.router.navigateByUrl("/solicitudarrendamiento/arrendatario/"+jwt.id);
          }
        },
        error: err => { console.error("Login failed:", err) }
      });
  }
}
