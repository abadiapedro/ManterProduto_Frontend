import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidenavComponent} from "./sidenav/sidenav.component";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterLink, RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    SidenavComponent
  ],
  exports: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    RouterLinkWithHref,
    MatButtonModule,
    MatToolbarModule,
    RouterOutlet,
    RouterLink,
  ]
})
export class LayoutModule { }
