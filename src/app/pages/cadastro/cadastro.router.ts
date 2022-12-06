import {Routes} from '@angular/router';
import {LayoutComponent} from "../../layout/layout.component";
import {HomeComponent} from "../home/home.component";
import {CardapioListarComponent} from "./cardapio/cardapio-listar/cardapio-listar.component";
import {CardapioEditarComponent} from "./cardapio/cardapio-editar/cardapio-editar.component";

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
      }
    ]
  }
];
