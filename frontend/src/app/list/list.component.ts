import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service/service-api.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  clients: any;
  
  constructor(private clientsService: ServiceApiService){}
  
  ngOnInit(){
    this.getAllClients();
  }

  getAllClients(){
    this.clientsService.getClientsList().pipe(
      catchError(error => {
        return error.error.message
      })
    ).subscribe(resp => {
      this.clients = resp;
    });
  }

  deleteClient(id: number){
    this.clientsService.deleteClient(id).pipe(
      catchError(error => {
        return error.error.message
      })
    ).subscribe(resp => {
      this.getAllClients()
    });

  }

}
