import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cliente} from "../../../shared/Cliente";

@Injectable({
  providedIn: 'root',
})

export class ClienteService {
  constructor(private http: HttpClient) {
  }

  clienteUrl = 'http://localhost:8080/cliente';

  criar(object: Cliente) {
    this.http.post(this.clienteUrl, object).subscribe(data => {
      return data;
    }
  }

  listar(object: Cliente) {
    return this.http.get<Cliente>(this.clienteUrl);
  }

  editar(object: Cliente) {
    this.http.put(this.clienteUrl, object).subscribe(data => {
      return data;
    }
  }

  excluir(object: Cliente) {
    this.http.delete(this.clienteUrl + "/" + object.id).subscribe(data => {
      return data;
    }
  }
}
