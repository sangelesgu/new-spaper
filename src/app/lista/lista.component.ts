import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../services/data.service'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent  {

  indice: string = "";


  constructor(public _route: ActivatedRoute, public _data : DataService) {

    this.indice = _route.snapshot.params['id'];

  }

}
