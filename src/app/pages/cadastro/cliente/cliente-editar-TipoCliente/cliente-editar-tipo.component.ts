import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";

export interface TipoCliente {
  nome: string;
  descricao: string;
}

const ELEMENT_DATA: TipoCliente[] = [
  {nome: 'Bala', descricao: 'Balinha',},
];

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar-tipo.component.html',
  styleUrls: ['./cliente-editar.component.scss']
})
export class ClienteEditarTipoComponent implements OnInit {
  tipoClienteDataSource = new MatTableDataSource<TipoCliente>()
  selected = '';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.tipoClienteDataSource.data = ELEMENT_DATA;
  }

  close () : void {
    this.dialog.closeAll();
  }

}
