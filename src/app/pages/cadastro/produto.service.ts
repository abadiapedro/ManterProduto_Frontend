import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Produto} from "../Shared/Produto";

@Injectable({
    providedIn: 'root',
})

export class ProdutoService {
    constructor(private http: HttpClient) { }
    produtoUrl = 'http://localhost:8080/produtos';

    criar(){

    }

  listar(object: Produto){
        return this.http.get<Produto>(this.produtoUrl);
    }

    editar(){

    }

    excluir(){

    }
}
