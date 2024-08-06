import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service/service-api.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username!: string;
  senha!: string;
  constructor(private clientsService: ServiceApiService){}
  
  ngOnInit(): void {
  }

  login(user: string, pass: string){
    this.clientsService.getLogin(user, pass).pipe(
      catchError(error => {
        console.error('Login failed', error);
        return error.error.message
      })
    ).subscribe(resp => {
      console.log('Login successful', resp);
      
    })
  }

}
