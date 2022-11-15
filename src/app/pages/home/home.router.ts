import { Routes } from '@angular/router';
import {HomeComponent} from './home.component';
import {LayoutComponent} from "../../layout/layout.component";

export const HomeRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ]
  }
];
