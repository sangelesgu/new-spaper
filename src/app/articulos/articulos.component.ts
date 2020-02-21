import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent  {

  indice: string = "";
  public category: string = "";

  constructor(public _route: ActivatedRoute, public _data : DataService) {

      this.indice = _route.snapshot.params["id"];
      this.category = _route.snapshot.params["category"];


  }

}
