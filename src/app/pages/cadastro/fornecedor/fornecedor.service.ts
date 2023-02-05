import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FornecedorModel} from "../../../shared/models/Fornecedor.model";

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  baseUrl = "http://localhost:8080/api/v1/fornecedores";

  constructor(private httpClient: HttpClient) { }

  list() : Observable<FornecedorModel[]> {
    return this.httpClient.get<FornecedorModel[]>(this.baseUrl);
  }

  // edit(fornecedor: FornecedorModel) : Observable<FornecedorModel> {
  //   return this.httpClient.put<FornecedorModel>(this.baseUrl, fornecedor);
  // }
  //
  // create(fornecedor: FornecedorModel) : Observable<FornecedorModel> {
  //   return this.httpClient.post<FornecedorModel>(this.baseUrl, fornecedor);
  // }

  inativar(fornecedor: FornecedorModel) {
    return this.httpClient.put<FornecedorModel>(this.baseUrl + `/${fornecedor.idPessoa}/inativo`, fornecedor);
  }

  ativar(fornecedor: FornecedorModel) {
    return this.httpClient.put<FornecedorModel>(this.baseUrl + `/${fornecedor.idPessoa}/ativo`, fornecedor);
  }
}
