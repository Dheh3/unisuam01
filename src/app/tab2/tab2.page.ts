import { Component } from '@angular/core';
import { MoviesService } from '../theMovieDB/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
/**
  public titulo: string = "atletico mineiro";
  public subtitulo:string ="libertadores da america";
  public conteudo: string = "Isso é um teste de conteudo";
 */

  //public imagem = "https://ionicframework.com/docs/img/demos/card-media.png"
  public topMovie!: any;
  public objetoCard = {
    titulo: "Atletico mineiro",
    subtitulo: "Libertadores da america",
    conteudo: "Isso é um teste de conteudo abc",
    imagem: "https://ionicframework.com/docs/img/demos/card-media.png"
  }

  constructor(private service: MoviesService) {}

  async ngOnInit(){
    this.topMovie = await this.service.getTest();
  }
}
