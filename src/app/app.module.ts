import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListaComponent } from './lista/lista.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { NofoundComponent } from './nofound/nofound.component';


import { Routes, RouterModule} from '@angular/router';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { ArticulosCategoriasComponent } from './articulos-categorias/articulos-categorias.component';





const RouterConfig: Routes = [

  {"path": "", "component":ListaComponent},
  {"path": "home", "component":ListaComponent},
  {"path": "article/:id", "component":ArticulosComponent},
  {"path": "category/:category", "component":CategoryComponent},
  {"path": "article/:id/:category", "component":ArticulosCategoriasComponent},
  {"path": "**", "component":NofoundComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaComponent,
    ArticulosComponent,
    FooterComponent,
    CategoryComponent,
    ArticulosCategoriasComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouterConfig, {useHash: true}),
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
