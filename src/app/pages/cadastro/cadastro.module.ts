import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import {CardapioComponent} from "./cardapio/cardapio.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    FornecedorComponent,
    CardapioComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CadastroModule { }
