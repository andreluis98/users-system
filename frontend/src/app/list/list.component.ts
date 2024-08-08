import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service/service-api.service';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  clients: any;
  showTable: boolean = false;
  filteredProducts: any[] = [];

  constructor(private clientsService: ServiceApiService, private route: Router) { }

  ngOnInit() {
    this.getAllClients();
  }

  getAllClients() {
    this.clientsService.getClientsList().pipe(
      catchError(error => {
        this.showTable = false;
        return error.error.message
      })
    ).subscribe(resp => {
      this.clients = resp;
      this.showTable = true;
    });
  }

  viewDetails() {
  }

  screenDelete(client: any) {
    localStorage.setItem('client', JSON.stringify(client));
    this.route.navigate(['/delete', client.id]);
  }

  screenCreate() {
    this.route.navigate(['/create']);
  }

  searchByCnpj(client: any) {
    localStorage.setItem('client', JSON.stringify(client));
    this.route.navigate(['/view-details', client.id]);
  }

  screenUpdate(client: any) {
    localStorage.setItem('client', JSON.stringify(client));
    this.route.navigate(['/update', client.id]);
  }

}
