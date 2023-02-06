import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ClienteService} from "../cliente.service";
import {MatDialog} from "@angular/material/dialog";
import {ClienteEditarComponent} from "../cliente-editar/cliente-editar.component";

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.scss']
})

export class ClienteListarComponent implements OnInit {
  form: any;
  displayedColumns: string[] = ['id', 'tipoCliente', 'razaoSocial', 'nomeFantasia', 'cpfCnpj', 'situacaoCliente', 'acoes'];
  dataSource = [];

  constructor(private clienteService: ClienteService, public dialog: MatDialog) {
    this.montarFormGroup()
  }

  ngOnInit(): void {
    this.listar()
  }

  montarFormGroup() {
    this.form = new FormGroup({
      razaoSocial: new FormControl(''),
      cpfCnpjs: new FormControl(''),
    });
  }

  listar() {
    console.log(this.form.value);
    this.clienteService.listar(this.form.value).subscribe((data: any) => {
      this.dataSource = data.content;
    });
  }

  criar() {
    const modalCriar = this.dialog.open(ClienteEditarComponent, {
      width: '1000px',
      height: '500px',
    });

    modalCriar.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  relatorio() {

  }

  editar() {
    const modalCriar = this.dialog.open(ClienteEditarComponent, {
      width: '1000px',
      height: '500px',
    });

    modalCriar.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  excluir(object: any) {
    this.clienteService.excluir()
  }

}
