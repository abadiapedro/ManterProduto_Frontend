import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProdutoService} from "../produto.service";

@Component({
  selector: 'app-cardapio-listar',
  templateUrl: './cardapio-listar.component.html',
    styleUrls: ['./cardapio-listar.component.scss']
})

export class CardapioListarComponent{
  form: any;

  displayedColumns: string[] = ['id', 'nome', 'dataCadastro', 'tipoProduto', 'situacaoProduto', 'acoes'];
  dataSource =[];

  constructor(private produtoService: ProdutoService) {
    this.montarFormGroup()
  }

  montarFormGroup(){
    this.form = new FormGroup({
      nome: new FormControl(''),
      tipoProduto: new FormControl(''),
    });
  }

  filtrar(){
    console.log(this.form.value);
    this.produtoService.filtrar(this.form.value).subscribe((data: any) => {
      this.dataSource = data.content;
    });
  }
  criar(){
    this.produtoService.criar()

  }

  relatorio(){

  }

  editar(object: any){
    this.produtoService.editar()
  }

  excluir(object: any){
    this.produtoService.excluir()
  }

}
