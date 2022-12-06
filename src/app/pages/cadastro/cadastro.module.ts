import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {CardapioListarComponent} from "./cardapio/cardapio-listar/cardapio-listar.component";
import {CardapioEditarComponent} from "./cardapio/cardapio-editar/cardapio-editar.component";
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [
    CardapioListarComponent,
    CardapioEditarComponent
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
  ]
})
export class CadastroModule { }
