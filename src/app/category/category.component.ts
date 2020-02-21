import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  category: string = "";

  constructor(public _route: ActivatedRoute, public _data : DataService) {


    // buscar category del parametro

    this.category = _route.snapshot.params["category"];

    _data.newsCategory(this.category);


   }



}
