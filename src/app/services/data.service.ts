import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public indice: string = "";
  public listArticles: object = {};
  public listArticlesCategory: object = {};
  public listArticlesSports: object = {};
  public listArticlesBusiness: object = {};
  public listArticlesTech: object = {};
  public listArticlesHealth: object = {};

  constructor(public _http: HttpClient) {

    this.newsUs()
  }

    newsUs(){
      this._http.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=1788926d5ee4414191b90f5808002230")
        .subscribe((responseApi) => {
          this.listArticles = responseApi["articles"];
        });
    }

    newsCategory(category:string){
      this._http.get("https://newsapi.org/v2/top-headlines?country=us&category="+category+"&apiKey=1788926d5ee4414191b90f5808002230")
        .subscribe((responseApi) => {
          this.listArticlesCategory = responseApi["articles"];
        });
    }


  }


