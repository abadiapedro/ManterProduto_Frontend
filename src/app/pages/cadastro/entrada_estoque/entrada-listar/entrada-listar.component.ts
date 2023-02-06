import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EntradaService} from "../entrada.service";
import {MatDialog} from "@angular/material/dialog";
import {EntradaEditarComponent} from "../entrada-editar/entrada-editar.component";

@Component({
  selector: 'app-entrada-listar',
  templateUrl: './entrada-listar.component.html',
    styleUrls: ['./entrada-listar.component.scss']
})

export class EntradaListarComponent implements OnInit{
  form: any;
  displayedColumns: string[] = ['id', 'fornecedor', 'dataCadastro', 'situacaoProduto', 'tipoProduto', 'valorTotal', 'acoes'];
  dataSource =[];

  constructor(private produtoService: EntradaService, public dialog: MatDialog) {
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
    this.produtoService.listar(this.form.value).subscribe((data: any) => {
      this.dataSource = data.content;
    });
  }
  criar(){
    const modalCriar = this.dialog.open(EntradaEditarComponent, {
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
    const modalCriar = this.dialog.open(EntradaEditarComponent, {
      width: '1000px',
      height: '500px',
    });

    modalCriar.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  excluir(object: any){
    this.produtoService.excluir()
  }

}
