import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuario} from "../../../shared/Usuario";

@Injectable({
  providedIn: 'root',
})

export class UsuarioService {
  constructor(private http: HttpClient) {
  }

  usuarioUrl = 'http://localhost:8080/usuario';

  criar() {

  }

  listar(object: Usuario) {
    return this.http.get<Usuario>(this.usuarioUrl);
  }

  editar() {

  }

  excluir() {

  }
}
