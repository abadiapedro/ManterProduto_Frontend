import {Routes} from '@angular/router';
import {LayoutComponent} from "../../layout/layout.component";
import {HomeComponent} from "../home/home.component";
import {CardapioListarComponent} from "./cardapio/cardapio-listar.component";

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
