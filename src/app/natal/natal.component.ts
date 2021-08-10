import { Component, Input } from "@angular/core";
import { ParticipantesNatal } from "./natal.participantes";

@Component({
  selector: "app-natal",
  templateUrl: "./natal.component.html",
  styleUrls: ["./natal.component.css"]
})
export class NatalComponent {
  _participantes: ParticipantesNatal[] = [];
  @Input() codeSearch: string;
  participantePar: string;
  carta: boolean;
  interesses: string[];
  participanteCode: string;
  ngOnInit(): void {
    this._participantes = participantesNatal;
    this.carta = true;
  }

  searchPar(): void {
    for (var i = 0; i < this._participantes.length; i++) {
      if (this._participantes[i].code === this.codeSearch) {
        this.participanteCode = this._participantes[i].to_give;
      }
      if (this._participantes[i].code === this.participanteCode) {
        this.interesses = this._participantes[i].interests;
        this.participantePar = this._participantes[i].name;
        this.carta = false;
      }
    }
  }
}

let participantesNatal: ParticipantesNatal[] = [
  {
    name: "Keiho",
    code: "@key010",
    to_give: "@Den010", //SEGUNDO EH O L
    interests: ["Aventura", "Demônio", "Batalha"]
  },
  {
    name: "Çedilha",
    code: "@Çed025",
    to_give: "@Ari010",
    interests: ["Cyberpunk", "Garota", "Samurai"]
  },
  {
    name: "Gustavo",
    code: "@Gus025",
    to_give: "@key010",
    interests: ["Design de Personagem", "Horror", "Fantasia"]
  },
  {
    name: "Pedro",
    code: "@Ped025",
    to_give: "@Gus025",
    interests: ["Vikings", "Cartoon", "Cyberpunk"]
  },
  {
    name: "Juice",
    code: "@Jui010",
    to_give: "@Lar025",
    interests: ["Moicanos", "Correntes", "Tatuagens"]
  },
  {
    name: "LAR",
    code: "@Lar025",
    to_give: "@Car010",
    interests: ["Ecchi", "Violência", "Melancolia"]
  },
  {
    name: "Denise",
    code: "@Den010",
    to_give: "@Çed025",
    interests: ["Polvos", "Baleia", "Gato"]
  },
  {
    name: "L",
    code: "@L010",
    to_give: "@Kur025",
    interests: ["Corrida", "Terror", "Cyberpunk"]
  },
  {
    name: "Thigas",
    code: "@Thg025",
    to_give: "@Ped025",
    interests: ["Ação", "Fantasia", "Terror"]
  },
  {
    name: "Plinio",
    code: "@Pli025",
    to_give: "@Jui010",
    interests: ["Futurista caotico", "Viking", "Medieval"]
  },
  {
    name: "Ariel",
    code: "@Ari010",
    to_give: "@Cok010",
    interests: ["Centauro", "Veado", "Eu mesmo"]
  },
  {
    name: "Kurai",
    code: "@Kur025",
    to_give: "@Kuo010",
    interests: ["Suicidio", "Garoto fofo", "Garota fofa"]
  },
  {
    name: "Carol",
    code: "@Car010",
    to_give: "@Pli025",
    interests: ["Animais Míticos", "Chibi", "Flores"]
  },
  {
    name: "Cookie",
    code: "@Cok010",
    to_give: "@Thg025",
    interests: ["Animais", "Pessoas", "Monstros Surreais"]
  },
  {
    name: "Kuro",
    code: "@Kuo010",
    to_give: "@L010",
    interests: ["Rei", "Medieval", "Gato"]
  }
];
