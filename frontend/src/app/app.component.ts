import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './service/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private authService: AuthServiceService) { }

  createdClient(): void {
    this.router.navigate(['/create']);
  }

  listAll(): void {
    this.router.navigate(['/list-all']);
  }

  searchCnpj(): void {
    this.router.navigate(['/search-cnpj']);
  }

  onLogin() {
    this.authService.login();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
}
}
