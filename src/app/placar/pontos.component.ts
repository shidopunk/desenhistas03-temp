import { ParticipantesService } from '../participantes/participantes.service';
import { Participantes } from '../participantes/participantes';

import { Component } from '@angular/core';

@Component({
  selector: 'app-pontos',
  templateUrl: './pontos.component.html',
  styleUrls: ['../app.component.css', './pontos.component.css']
})
export class PontosComponent {
  _participantes: Participantes[] = [];
  _quantidade: number = 0;
  firstPlace: boolean = false;
  constructor(private participantesService: ParticipantesService) {}

  ngOnInit(): void {
    this._participantes = this.participantesService.retrieveAll();
    console.log(this._participantes[0].points);
    //Para dar pontos chame o this.pontuar(['ganhador', 'participante', ...] ex: this.pontuar(["Çedilha", "Ariel"]);)

    this.pontuar(['Gustavo', 'Letícia', 'Wallace']);
    this.pontuar(['', 'Lar', 'Ariel', 'Gustavo', 'Letícia']);
    this.pontuar(['', 'Ariel', 'Wallace', 'Letícia', 'Limora']);
    this.pontuar(['Limora', 'Gustavo', 'Ariel', 'Letícia', 'Yamada', 'William']);
  }

  pontuar(artistas: string[]) {
    for (let posicao = 0; posicao < artistas.length; posicao++) {
      for (var i = 0; i < this._participantes.length; i++) {
        if (
          posicao === 0 &&
          artistas[posicao] === this._participantes[i].name
        ) {
          this._participantes[i].points = this._participantes[i].points + 75;
          this._participantes[i].victory += 1;
          this._participantes[i].events += 1;
        } else if (this._participantes[i].name === artistas[posicao]) {
          this._participantes[i].points = this._participantes[i].points + 25;
          this._participantes[i].events += 1;
        }
      }
    }
    this._quantidade = this._quantidade + 1;
  }
}
