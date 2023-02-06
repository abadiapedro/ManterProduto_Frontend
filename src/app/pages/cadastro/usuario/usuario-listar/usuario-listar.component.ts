import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UsuarioService} from "../usuario.service";
import {MatDialog} from "@angular/material/dialog";
import {UsuarioEditarComponent} from "../usuario-editar/usuario-editar.component";

@Component({
  selector: 'app-cardapio-listar',
  templateUrl: './usuario-listar.component.html',
    styleUrls: ['./usuario-listar.component.scss']
})

export class UsuarioListarComponent implements OnInit{
  form: any;
  displayedColumns: string[] = ['id', 'nome', 'dataCadastro', 'tipoProduto', 'situacaoProduto', 'acoes'];
  dataSource =[];

  constructor(private vendaService: UsuarioService, public dialog: MatDialog) {
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
    this.vendaService.listar(this.form.value).subscribe((data: any) => {
      this.dataSource = data.content;
    });
  }
  criar(){
    const modalCriar = this.dialog.open(UsuarioEditarComponent, {
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
    const modalCriar = this.dialog.open(UsuarioEditarComponent, {
      width: '1000px',
      height: '500px',
    });

    modalCriar.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  excluir(object: any){
    this.vendaService.excluir()
  }

}
