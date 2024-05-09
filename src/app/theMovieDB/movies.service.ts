import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 API_key = "?api_key=c48deaafd640fd563d7b46d0b8d9b2bb&language=en-US&page=1"
// BASE_URL = "https://api.themoviedb.org/3/"
 POPULAR = "https://api.themoviedb.org/3/movie/popular"
  constructor(
    private httpt:HttpClient,
  ) { }

  //==
  public async getTest(): Promise<any>{
    return await fetch(`${this.POPULAR}${this.API_key}`)
    .then((response) => response.json())
    .then((json) => {
      return json
    })
  }  

}
