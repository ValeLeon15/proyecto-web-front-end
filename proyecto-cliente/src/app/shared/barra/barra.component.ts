import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { UserType } from '../../dto/user-type';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrl: './barra.component.css'
})
export class BarraComponent implements OnInit, OnDestroy {

constructor(private router: Router, private userService: AuthService) {}

  userId = 0;
  userRole = "";
  
  userIdSubscription: Subscription | undefined;
  userRoleSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.userService.loadUserFromSessionStorage();
    this.userIdSubscription = this.userService.userId$.subscribe(id => this.userId = id);
    this.userRoleSubscription = this.userService.userRole$.subscribe(role => this.userRole = role);

  }
  ngOnDestroy(): void {
      if (this.userIdSubscription) {
        this.userIdSubscription.unsubscribe();
      }
      if (this.userRoleSubscription) {
        this.userRoleSubscription.unsubscribe();
      }
    }
  
  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
    }

}
