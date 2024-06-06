import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  /** 
 API_key = "?api_key=c48deaafd640fd563d7b46d0b8d9b2bb&language=en-US&page=1";
 BASE_URL = "https://api.themoviedb.org/3/";;
 POPULAR = "https://api.themoviedb.org/3/movie/popular";
*/
 private servico: string = "movie/popular";
  private padrao:string ="https://api.themoviedb.org/3/";
  private key: string = "c48deaafd640fd563d7b46d0b8d9b2bb";
  constructor(
    public http:HttpClient
  ) { }

  //==
  public getPopularMovies(idioma='pt-br', pagina=1){
    let url: string = `${this.padrao}${this.servico}?api_key=${this.key}&language=${idioma}&page=${pagina}`;
    console.log(url);
    return this.http.get(url);
  } 

}
