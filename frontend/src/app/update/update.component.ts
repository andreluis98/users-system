import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceApiService } from '../service/service-api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  formUpdate!: FormGroup;
  clientId!: number;
  client: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ServiceApiService,
    private fb: FormBuilder
  ){
    this.formUpdate = this.fb.group({
      cnpj: [''],
      razaoSocial: [''],
      status: [''],
    });
  }

  ngOnInit(): void {
    this.clientId = this.route.snapshot.params['id'];
    const clientData = localStorage.getItem('client');
    if (clientData) {
      this.client = JSON.parse(clientData);
    }
  }

  updateClient() {
    if (this.formUpdate.valid) {
      this.apiService.updateClient(this.clientId, this.formUpdate.value.cnpj, this.formUpdate.value.razaoSocial, this.formUpdate.value.status).subscribe(() => {
        this.router.navigate(['/list-all']);
      });
    }
  }
}
