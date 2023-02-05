import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";

export interface Contato {
  nome: string;
  email: string;
  telefone: string;
}

const ELEMENT_DATA: Contato[] = [
  {nome: 'João Augusto', email: 'joao@a.com', telefone: '6299999999'},
];

@Component({
  selector: 'app-fornecedor-editar',
  templateUrl: './fornecedor-editar.component.html',
  styleUrls: ['./fornecedor-editar.component.scss']
})
export class FornecedorEditarComponent implements OnInit {
  contatosDataSource = new MatTableDataSource<Contato>()
  selected = '';
  contatosDisplayedColumns: string[] = ['nome', 'email', 'telefone', 'acoes'];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.contatosDataSource.data = ELEMENT_DATA;
  }

  abrirModalSelecionaContatoMultiplo() {
    const modalCriar = this.dialog.open(FornecedorEditarComponent, {
      width: '1000px',
      height: '500px',
    });

    modalCriar.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  close () : void {
    this.dialog.closeAll();
  }
}
