import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
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
  templateUrl: './entrada-editar.component.html',
  styleUrls: ['./entrada-editar.component.scss']
})
export class EntradaEditarComponent implements OnInit {

  tipoProdutoDataSource = new MatTableDataSource<TipoProduto>()
  selected = '';
  isChecked= true;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.tipoProdutoDataSource.data = ELEMENT_DATA;
  }

  close () : void {
    this.dialog.closeAll();
  }
}
