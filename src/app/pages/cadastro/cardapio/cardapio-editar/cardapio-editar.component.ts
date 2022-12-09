import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {CardapioEditarTipoComponent} from "../cardapio-editar-TipoProduto/cardapio-editar-tipo.component";
import {FormBuilder} from "@angular/forms";

export interface TipoProduto {
  nome: string;
  descricao: string;
}

const ELEMENT_DATA: TipoProduto[] = [
  {nome: 'Bala', descricao: 'Balinha',},
];

@Component({
  selector: 'app-cardapio-editar',
  templateUrl: './cardapio-editar.component.html',
  styleUrls: ['./cardapio-editar.component.scss']
})
export class CardapioEditarComponent implements OnInit {

  tipoProdutoDataSource = new MatTableDataSource<TipoProduto>()
  selected = '';
  isChecked= true;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.tipoProdutoDataSource.data = ELEMENT_DATA;
  }

  abrirModalIncluirTipoProduto() {
    const modalCriar = this.dialog.open(CardapioEditarTipoComponent, {
      width: '500px',
      height: '400px',
    });

    modalCriar.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  close () : void {
    this.dialog.closeAll();
  }
}
