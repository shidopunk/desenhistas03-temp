import { ParticipantesService } from "./participantes.service";
import { Participantes } from "./participantes";
import { Component } from "@angular/core";

@Component({
  selector: "app-participantes",
  templateUrl: "./participantes.component.html",
  styleUrls: ["../app.component.css"]
})
export class ParticipantesComponent {
  _participantes: Participantes[] = [];
  
  constructor(private participantesService: ParticipantesService) {}

  ngOnInit(): void {
    this._participantes = this.participantesService.retrieveAll();
  }
}
