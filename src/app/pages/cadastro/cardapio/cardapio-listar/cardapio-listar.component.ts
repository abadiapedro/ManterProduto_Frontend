import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProdutoService} from "../produto.service";
import {MatDialog} from "@angular/material/dialog";
import {CardapioEditarComponent} from "../cardapio-editar/cardapio-editar.component";

@Component({
  selector: 'app-cardapio-listar',
  templateUrl: './cardapio-listar.component.html',
    styleUrls: ['./cardapio-listar.component.scss']
})

export class CardapioListarComponent implements OnInit{
  form: any;
  displayedColumns: string[] = ['id', 'nome', 'dataCadastro', 'tipoProduto', 'situacaoProduto', 'acoes'];
  dataSource =[];

  constructor(private produtoService: ProdutoService, public dialog: MatDialog) {
    this.montarFormGroup()
  }
  ngOnInit(): void {
    this.listar()
  }

  montarFormGroup(){
    this.form = new FormGroup({
      nome: new FormControl(''),
      tipoProduto: new FormControl(''),
    });
  }

  listar(){
    console.log(this.form.value);
    this.produtoService.listar(this.form.value).subscribe((data: any) => {
      this.dataSource = data.content;
    });
  }
  criar(){
    const modalCriar = this.dialog.open(CardapioEditarComponent, {
      width: '1000px',
      height: '500px',
    });

    modalCriar.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  relatorio(){

  }

  editar(){
    const modalCriar = this.dialog.open(CardapioEditarComponent, {
      width: '1000px',
      height: '500px',
    });

    modalCriar.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  excluir(object: any){
    this.produtoService.excluir()
  }

}
