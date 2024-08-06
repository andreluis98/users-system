import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service/service-api.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-search-cnpj',
  templateUrl: './search-cnpj.component.html',
  styleUrls: ['./search-cnpj.component.css']
})
export class SearchCnpjComponent implements OnInit {
  clientsCNPJ: any;
  
  constructor(private clientsService: ServiceApiService){}

    
  ngOnInit(){
    this.getClientByCnpj('123456789');
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

}
