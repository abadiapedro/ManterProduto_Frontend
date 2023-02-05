import { Component, OnInit } from '@angular/core';
import {FornecedorModel} from "../../../../shared/models/Fornecedor.model";
import {FornecedorService} from "../fornecedor.service";
import {MatDialog} from "@angular/material/dialog";
import {FornecedorEditarComponent} from "../fornecedor-editar/fornecedor-editar.component";

@Component({
  selector: 'app-fornecedor-filtrar',
  templateUrl: './fornecedor-filtrar.component.html',
  styleUrls: ['./fornecedor-filtrar.component.scss']
})
export class FornecedorFiltrarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
