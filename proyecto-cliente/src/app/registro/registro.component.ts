import { Component } from '@angular/core';
import { RegisterDto } from '../dto/register-dto';
import { UserType } from '../dto/user-type';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  registerDto: RegisterDto = new RegisterDto("", "", "", "", 0, UserType.ARRENDADOR);

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.logout();
  }

  register(){
    this.auth.register(this.registerDto)
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
        error: err => { console.error("Register failed:", err) }
      });
  }
}
