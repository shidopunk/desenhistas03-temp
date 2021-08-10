import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { BootstrapComponent } from "./bootstrap.component";
import { ParticipantesComponent } from "./participantes/participantes.component";
import { PontosComponent } from "./placar/pontos.component";
import { MenuComponent } from "./menu/menu.component";
import { PrizeComponent } from "./prize/prize.component";
import { NatalComponent } from "./natal/natal.component";
import { CampeoesComponent } from "./campeoes/campeoes.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ParticipantesComponent,
    PontosComponent,
    MenuComponent,
    BootstrapComponent,
    PrizeComponent,
    NatalComponent,
    CampeoesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
