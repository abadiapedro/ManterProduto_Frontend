import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Produto} from "./cardapio/Produto";

@Injectable({
    providedIn: 'root',
})

export class ProdutoService {
    constructor(private http: HttpClient) { }
    produtoUrl = 'http://localhost:8080/produtos';

    criar(){

    }

    filtrar(object: Produto){
        return this.http.get<Produto>(this.produtoUrl);
    }

    editar(){

    }

    excluir(){

    }
}
