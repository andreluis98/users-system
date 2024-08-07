import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceApiService } from '../service/service-api.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit{
  client: any;
  constructor(private clientsService: ServiceApiService, private route: Router, private router: ActivatedRoute){}
  ngOnInit(){ 
    const clientData = localStorage.getItem('client'); 
    console.log('clientData', clientData);
    if (clientData) {
      this.client = JSON.parse(clientData);
    }
  }

  getClientByCnpj(cnpj: string){
    this.clientsService.getClientByCnpj(cnpj).pipe(
      catchError(error => {
        return error.error.message
      })
    ).subscribe(resp => {
      this.client = resp;
    });
  }
}
