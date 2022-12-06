import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from "./layout/layout.module";
import {LayoutComponent} from "./layout/layout.component";
import {CadastroModule} from "./pages/cadastro/cadastro.module";
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from "@angular/material/dialog";
import {FlexLayoutModule} from "@angular/flex-layout";
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule,
    CadastroModule,
    MatDialogModule
  ],
  providers: [MatDialogModule],
  exports: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
