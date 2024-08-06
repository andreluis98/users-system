import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service/service-api.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private clientsService: ServiceApiService, private route: Router){}
  
  ngOnInit(){
    this.deleteClient(1);
  }

  deleteClient(id: number){
    this.clientsService.deleteClient(id).pipe(
      catchError(error => {
        return error.error.message
      })
    ).subscribe(resp => {
    });

  }
}
