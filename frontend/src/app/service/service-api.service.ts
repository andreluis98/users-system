import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  private baseUrl = 'http://localhost:8080/clients';

  constructor(private httpClient: HttpClient) { }

  //Listar todos o clients
  getClientsList(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}`)
  }

  //Buscar pelo CNPJ
  getClientByCnpj(cnpj: string): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${cnpj}`);
  }

  //Login
  getLogin(
    usuario: string,
    senha: string
  ) {
    const body = {
      usuario: usuario,
      senha: senha
    }

    return this.httpClient.post(`${this.baseUrl}/login`, body)
  }

  //Criar novo cliente
  createdClient(
    cnpj: string,
    razaoSocial: string,
    usuario: string,
    senha: string,
    status: string,
  ) {
    const body = {
      cnpj: cnpj,
      razaoSocial: razaoSocial,
      usuario: usuario,
      senha: senha,
      status: status,
    }
    return this.httpClient.post(`${this.baseUrl}`, body)
  }

  //Atualizar Cliente
  updateClient(
    id: number,
    cnpj?: string,
    razaoSocial?: string,
    status?: string,
  ) {
    const body = {
      id: id,
      cnpj: cnpj,
      razaoSocial: razaoSocial,
      status: status,
    }
    return this.httpClient.put(`${this.baseUrl}`, body)
  }

  //Excluir Cliente
  deleteClient(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/${id}`)
  }

}
