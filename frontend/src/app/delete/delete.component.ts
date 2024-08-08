import { Component, Input, OnInit } from '@angular/core';
import { ServiceApiService } from '../service/service-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  clienteId!: number;
  client: any;
  constructor(private clientsService: ServiceApiService, private route: Router, private router: ActivatedRoute) { }
  ngOnInit() {
    const clientId = this.router.snapshot.params['id'];
    const clientData = localStorage.getItem('client');
    if (clientData) {
      this.client = JSON.parse(clientData);
    }
  }

  deleteClient(id: number) {
    this.clientsService.deleteClient(id).pipe(
      catchError(error => {
        Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: `${error.message}`,
        })
        return ''
      })
    ).subscribe(resp => {
      this.client = resp
      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Cliente excluído com sucesso!',
      }).then((result) => {
        if (result.isConfirmed) {
          this.route.navigate(['/list-all']);
        }
      });
    })
  }

  cancelDelete() {
    this.route.navigate(['/list-all']);
  }

}
