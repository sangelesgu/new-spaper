import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-articulos-categorias',
  templateUrl: './articulos-categorias.component.html',
  styleUrls: ['./articulos-categorias.component.css']
})
export class ArticulosCategoriasComponent  {

  indice: string = "";
  public category: string = "";

  constructor(public _route: ActivatedRoute, public _data : DataService) {

    this.indice = _route.snapshot.params["id"];
    this.category = _route.snapshot.params["category"]

   }


}
