import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service/service-api.service';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  constructor(private clientsService: ServiceApiService, private route: Router){}
  
  ngOnInit(): void {}

  createClient(
    cnpj: string,
    razaoSocial: string,
    usuario: string,
    senha: string,
    status: string,
  ){
    this.clientsService.createdClient(cnpj, razaoSocial, usuario, senha, status).pipe(
      catchError(error => {
        console.log(error);
        
        Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: `${error.error.message}`,
        })
        return ''
      })
    ).subscribe(resp => {
      this.client = resp;
      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Cliente Criado com sucesso!',
      }).then((result) => {
        if(result.isConfirmed){
          this.route.navigate(['/list-all']);
        }
      });
    });
  }

  goBack() {
    this.route.navigate(['/list-all']);
  }
}
