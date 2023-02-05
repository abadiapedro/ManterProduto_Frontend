import {Routes} from '@angular/router';
import {LayoutComponent} from "../../layout/layout.component";
import {HomeComponent} from "../home/home.component";
import {CardapioListarComponent} from "./cardapio/cardapio-listar/cardapio-listar.component";
import {CardapioEditarComponent} from "./cardapio/cardapio-editar/cardapio-editar.component";
import {FornecedorListarComponent} from "./fornecedor/fornecedor-listar/fornecedor-listar.component";
import {FornecedorFiltrarComponent} from "./fornecedor/fornecedor-filtrar/fornecedor-filtrar.component";
import {ClienteListarComponent} from "./cliente/cliente-listar/cliente-listar.component";
import {EntradaListarComponent} from "./entrada_estoque/entrada-listar/entrada-listar.component";
import {VendaListarComponent} from "./vendas/venda-listar/venda-listar.component";

export const CadastroRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'cardapio',
        component: CardapioListarComponent,
      },
      {
        path: 'fornecedor',
        component: FornecedorFiltrarComponent,
      },
      {
        path: 'cliente',
        component: ClienteListarComponent,
      },
      {
        path: 'entrada',
        component: EntradaListarComponent,
      },
      {
        path: 'venda',
        component: VendaListarComponent,
      }
    ]
  }
];
