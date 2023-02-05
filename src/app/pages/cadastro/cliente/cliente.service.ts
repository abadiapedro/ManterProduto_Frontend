import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cliente} from "../../../shared/Cliente";

@Injectable({
    providedIn: 'root',
})

export class ClienteService {
    constructor(private http: HttpClient) { }
    clienteUrl = 'http://localhost:8080/cliente';

    criar(){

    }

  listar(object: Cliente){
        return this.http.get<Cliente>(this.clienteUrl);
    }

    editar(){

    }

    excluir(){

    }
}
