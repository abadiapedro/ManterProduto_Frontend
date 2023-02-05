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
import {MatPaginatorModule} from "@angular/material/paginator";
import {FornecedorFiltrarComponent} from "./fornecedor/fornecedor-filtrar/fornecedor-filtrar.component";
import {FornecedorEditarComponent} from "./fornecedor/fornecedor-editar/fornecedor-editar.component";
import {FornecedorListarComponent} from "./fornecedor/fornecedor-listar/fornecedor-listar.component";
import {ClienteService} from "./cliente/cliente.service";
import {ClienteEditarComponent} from "./cliente/cliente-editar/cliente-editar.component";
import {ClienteListarComponent} from "./cliente/cliente-listar/cliente-listar.component";
import {EntradaEditarComponent} from "./entrada_estoque/entrada-editar/entrada-editar.component";
import {EntradaListarComponent} from "./entrada_estoque/entrada-listar/entrada-listar.component";
import {VendaEditarComponent} from "./vendas/venda-editar/venda-editar.component";
import {VendaListarComponent} from "./vendas/venda-listar/venda-listar.component";

@NgModule({
  declarations: [
    CardapioListarComponent,
    CardapioEditarComponent,
    CardapioEditarTipoComponent,
    FornecedorFiltrarComponent,
    FornecedorEditarComponent,
    FornecedorListarComponent,
    ClienteEditarComponent,
    ClienteListarComponent,
    EntradaEditarComponent,
    EntradaListarComponent,
    VendaEditarComponent,
    VendaListarComponent
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
        MatPaginatorModule,
    ]
})
export class CadastroModule { }
