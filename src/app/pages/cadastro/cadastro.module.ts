import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import {CardapioComponent} from "./cardapio/cardapio.component";



@NgModule({
  declarations: [
    FornecedorComponent,
    CardapioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CadastroModule { }
