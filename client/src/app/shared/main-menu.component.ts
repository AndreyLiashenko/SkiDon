import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.html',
  styleUrls: ['./main-menu.css']
})
export class MainMenuComponent {
  constructor(public auth: AuthService, private router: Router) { }

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
