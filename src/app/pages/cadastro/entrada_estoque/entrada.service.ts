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

  criar(object: Entrada) {
    this.http.post(this.entradaUrl, object).subscribe(data => {
      return data;
    }
  }

  listar(object: Entrada) {
    return this.http.get<Entrada>(this.entradaUrl);
  }

  editar(object: Entrada) {
    this.http.put(this.entradaUrl, object).subscribe(data => {
      return data;
    }
  }

  excluir(object: Entrada) {
    this.http.delete(this.entradaUrl + "/" + object.id).subscribe(data => {
      return data;
    }
  }
}
