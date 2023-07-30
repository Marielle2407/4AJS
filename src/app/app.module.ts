import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListeJeuxComponent } from './liste-jeux/liste-jeux.component';
import { DetailJeuxComponent } from './detail-jeux/detail-jeux.component';
import { GiveAwayComponent } from './give-away/give-away.component';
import { NewGameComponent } from './new-game/new-game.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListeJeuxComponent,
    DetailJeuxComponent,
    GiveAwayComponent,
    NewGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
