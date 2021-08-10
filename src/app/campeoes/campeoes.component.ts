import { Component } from "@angular/core";
import { ParticipantesService } from "../participantes/participantes.service";
import { Campeoes } from "./campeoes";

@Component({
  selector: "app-campeoes",
  templateUrl: "./campeoes.component.html",
  styleUrls: ["./campeoes.component.css"]
})
export class CampeoesComponent {
  campeoes: Campeoes[] = [];
  tabela: boolean;

  ngOnInit(): void {
    this.campeoes = desenhistas;
    this.tabela = true;
  }

  fecharTabela(): void {
    this.tabela = true;
  }

  abrirTabela(): void {
    this.tabela = false;
  }
}

let desenhistas: Campeoes[] = [
  {
    name: "Çedilha",
    season: 1,
    points: 375,
    victory: 3,
    picture:
      "https://64.media.tumblr.com/68f58b4e5cd19dc45147b88a6fb296d0/713f3be3093cbb7a-10/s400x600/8e0314b9fc13463aa11e86312384cdb51d3677d0.png",
    trophy: "https://www.flaticon.com/svg/static/icons/svg/3970/3970572.svg"
  },
  {
    name: "Letícia",
    season: 2,
    points: 550,
    victory: 2,
    picture:
      "https://64.media.tumblr.com/9414c6f2c0cd7bb4e08ef8d44685f357/tumblr_p38sobozR21qirgu6o4_250.png",
    trophy: "https://img-premium.flaticon.com/png/512/2641/2641497.png?token=exp=1622644321~hmac=6f8f08bbae967349202c77ec1d1357e9"
  }

];
