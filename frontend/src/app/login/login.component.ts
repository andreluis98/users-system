import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service/service-api.service';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username!: string;
  senha!: string;
  errorMessage: string = '';
  constructor(
    private clientsService: ServiceApiService,
    private authService: AuthServiceService,
    private router: Router
  ){}
  
  ngOnInit(): void {
  }

  login(user: string, pass: string){
    this.clientsService.getLogin(user, pass).pipe(
      catchError(error => {
        this.errorMessage = error.error.message;
        return ''
      })
    ).subscribe(resp => {
      this.authService.login();
      this.router.navigate(['/list-all']);
    })
  }

}
