import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {VendaService} from "../venda.service";
import {MatDialog} from "@angular/material/dialog";
import {VendaEditarComponent} from "../venda-editar/venda-editar.component";

@Component({
  selector: 'app-cardapio-listar',
  templateUrl: './venda-listar.component.html',
    styleUrls: ['./venda-listar.component.scss']
})

export class VendaListarComponent implements OnInit{
  form: any;
  displayedColumns: string[] = ['id', 'nome', 'dataCadastro', 'tipoProduto', 'situacaoProduto', 'acoes'];
  dataSource =[];

  constructor(private vendaService: VendaService, public dialog: MatDialog) {
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
    const modalCriar = this.dialog.open(VendaEditarComponent, {
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
    const modalCriar = this.dialog.open(VendaEditarComponent, {
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
