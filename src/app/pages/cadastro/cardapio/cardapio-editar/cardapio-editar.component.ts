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
  templateUrl: './cardapio-editar.component.html',
  styleUrls: ['./cardapio-editar.component.scss']
})
export class CardapioEditarComponent implements OnInit {
  tipoProdutoDataSource = new MatTableDataSource<TipoProduto>()
  selected = '';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.tipoProdutoDataSource.data = ELEMENT_DATA;
  }

  abrirModalIncluirTipoProduto() {
    const modalCriar = this.dialog.open(CardapioEditarComponent, {
      width: '1000px',
      height: '500px',
    });

    modalCriar.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
