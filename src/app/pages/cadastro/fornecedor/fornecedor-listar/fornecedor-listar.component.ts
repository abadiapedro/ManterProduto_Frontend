import { Component, OnInit } from '@angular/core';
import {FornecedorModel} from "../../../../shared/models/Fornecedor.model";
import {FornecedorService} from "../fornecedor.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {FornecedorEditarComponent} from "../fornecedor-editar/fornecedor-editar.component";

@Component({
  selector: 'app-fornecedor-listar',
  templateUrl: './fornecedor-listar.component.html',
  styleUrls: ['./fornecedor-listar.component.scss']
})
export class FornecedorListarComponent implements OnInit {

  fornecedores : FornecedorModel[] = [];
  displayedColumns = ['razaoSocial','cnpj','inscricaoMunicipal','email','telefonePrincipal', 'status', 'acoes']

  constructor(private fornecedorService: FornecedorService, public dialog: MatDialog, private router : Router) { }

  ngOnInit(): void {
    this.filtrar()
  }

  criar(){
    const modalCriar = this.dialog.open(FornecedorEditarComponent, {
      width: '1000px',
      height: '500px',
    });

    modalCriar.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  editar(fornecedor: FornecedorModel) {
    if(fornecedor == null) {

    }
    console.log("Editar fornecedor: " + fornecedor);
  }

  inativar(fornecedor: FornecedorModel) {
    this.fornecedorService.inativar(fornecedor).subscribe();
    this.filtrar();
  }

  ativar(fornecedor: FornecedorModel) {
    this.fornecedorService.ativar(fornecedor).subscribe();
    this.filtrar();
  }

  filtrar() {
    this.fornecedorService.list().subscribe((fornecedores : FornecedorModel[]) => {
      this.fornecedores = fornecedores;
    });
  }
}
