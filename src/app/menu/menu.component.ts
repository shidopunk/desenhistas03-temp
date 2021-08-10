import { Component } from "@angular/core";
import { ParticipantesService } from "../participantes/participantes.service";
import { Participantes } from "../participantes/participantes";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["../app.component.css"]
})
export class MenuComponent {
  valor: string;
  participantes: Participantes[] = [];
  profile: string;
  picture: string;
  display: string;

  constructor(private participantesService: ParticipantesService) {}
  ngOnInit(): void {
    this.participantes = this.participantesService.retrieveAll();
    this.display = "none";
  }

  tamanho(valor: string): void {
    for (let i = 0; i < this.participantes.length; i++) {
      if (this.participantes[i].name === valor) {
        this.profile = valor;
        this.picture = this.participantes[i].picture;
        this.participantes[i].picture =
          "https://64.media.tumblr.com/1a6aba09fabcdd4721e6ef43c4ed5de4/e1577fd506407a7b-01/s400x600/6fbc7c205ff93ac54829d60a7236909a5fb9f36a.png";
        this.display = "block";
      }
    }
  }
}
