import { Component } from '@angular/core';
//import { MoviesService } from '../theMovieDB/movies.service';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from '../theMovieDB/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public lista =new Array<any>();

  public capa = 'https://image.tmdb.org/t/p/w500/'

  private servico: string = "movie/popular";
  private padrao:string ="https://api.themoviedb.org/3/";
  private key: string = "?api_key=c48deaafd640fd563d7b46d0b8d9b2bb";
 

  public imagem = "https://ionicframework.com/docs/img/demos/card-media.png"
  
  constructor(public movieservice:MoviesService) {}
  
  ionViewDidEnter(){
    this.carregaFilmes();
  }
  public carregaFilmes(){
    this.movieservice.getPopularMovies('pt-br',1).subscribe(
      data => {
        let json = (data as any);
        this.lista = this.lista.concat(json.results);
        console.log(this.lista);
      }
    )
  }

  handleRefresh(event:any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

  async ngOnInit(){
  //this.topMovie = await this.service.getTest();
  }

}
