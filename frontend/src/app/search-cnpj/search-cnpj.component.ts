import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service/service-api.service';
import { catchError } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search-cnpj',
  templateUrl: './search-cnpj.component.html',
  styleUrls: ['./search-cnpj.component.css']
})
export class SearchCnpjComponent implements OnInit {
  clientsCNPJ: any;
  cnpj: string = '';
  client: any;
  constructor(private clientsService: ServiceApiService){}

    
  ngOnInit(){
  }

  getClientByCnpj(cnpj: string){
    this.clientsService.getClientByCnpj(cnpj).pipe(
      catchError(error => {
        return error.error.message
      })
    ).subscribe(resp => {
      this.clientsCNPJ = resp;
    });
  }

  searchByCnpj() {
    this.clientsService.getClientByCnpj(this.cnpj).pipe(
      catchError(error => {
        Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: 'CNPJ não encontrado. Verifique e tente novamente.',
        })
        this.client = null;
        return ''
      })
    ).subscribe(client => {
      this.client = client;
      console.log(client);
      
    });
  }

}
