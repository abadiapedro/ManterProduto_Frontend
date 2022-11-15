import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {AppModule} from "../../app.module";
import {SidenavComponent} from "../../layout/sidenav/sidenav.component";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AppModule,
    MatIconModule
  ]
})
export class HomeModule { }
