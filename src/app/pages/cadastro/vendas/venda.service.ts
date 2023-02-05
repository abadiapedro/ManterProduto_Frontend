import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Venda} from "../../../shared/Venda";

@Injectable({
  providedIn: 'root',
})

export class VendaService {
  constructor(private http: HttpClient) {
  }

  vendaUrl = 'http://localhost:8080/venda';

  criar() {

  }

  listar(object: Venda) {
    return this.http.get<Venda>(this.vendaUrl);
  }

  editar() {

  }

  excluir() {

  }
}
