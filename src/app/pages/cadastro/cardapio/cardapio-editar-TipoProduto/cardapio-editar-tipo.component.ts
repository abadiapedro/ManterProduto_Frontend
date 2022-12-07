import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";

export interface TipoProduto {
  nome: string;
  descricao: string;
}

const ELEMENT_DATA: TipoProduto[] = [
  {nome: 'Bala', descricao: 'Balinha',},
];

@Component({
  selector: 'app-cardapio-editar',
  templateUrl: './cardapio-editar-tipo.component.html',
  styleUrls: ['./cardapio-editar.component.scss']
})
export class CardapioEditarTipoComponent implements OnInit {
  tipoProdutoDataSource = new MatTableDataSource<TipoProduto>()
  selected = '';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.tipoProdutoDataSource.data = ELEMENT_DATA;
  }


}
