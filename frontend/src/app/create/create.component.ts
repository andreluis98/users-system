import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service/service-api.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  username!: string;
  senha!: string;
  cnpj!: string;
  razaoSocial!: string;
  status!: string;

  client: any

  constructor(private clientsService: ServiceApiService){}
  
  ngOnInit(): void {
    this.createClient(
      "12345678000195",
      "TEST COMPANY",
      "andrem",
      "123456",
      "ATIVO",
    );
  }

  createClient(
    cnpj: string,
    razaoSocial: string,
    usuario: string,
    senha: string,
    status: string,
  ){
    this.clientsService.createdClient(cnpj, razaoSocial, usuario, senha, status).pipe(
      catchError(error => {
        return error.error.message
      })
    ).subscribe(resp => {
      this.client = resp;
      
    });
  }
}
