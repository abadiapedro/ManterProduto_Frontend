import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Entrada} from "../../../shared/Entrada";

@Injectable({
  providedIn: 'root',
})

export class EntradaService {
  constructor(private http: HttpClient) {
  }

  entradaUrl = 'http://localhost:8080/entrada';

  criar() {

  }

  listar(object: Entrada) {
    return this.http.get<Entrada>(this.entradaUrl);
  }

  editar() {

  }

  excluir() {

  }
}
