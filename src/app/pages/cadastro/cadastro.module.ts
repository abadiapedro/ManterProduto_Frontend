import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {CardapioListarComponent} from "./cardapio/cardapio-listar/cardapio-listar.component";
import {CardapioEditarComponent} from "./cardapio/cardapio-editar/cardapio-editar.component";
import {MatTabsModule} from "@angular/material/tabs";
import {FlexModule} from "@angular/flex-layout";
import {CardapioEditarTipoComponent} from "./cardapio/cardapio-editar-TipoProduto/cardapio-editar-tipo.component";
import {MatSelectModule} from "@angular/material/select";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

@NgModule({
  declarations: [
    CardapioListarComponent,
    CardapioEditarComponent,
    CardapioEditarTipoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    FlexModule,
    MatSelectModule,
    MatSlideToggleModule,
    FormsModule,
  ]
})
export class CadastroModule { }
