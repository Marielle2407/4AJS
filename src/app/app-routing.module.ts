import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {ListeJeuxComponent} from "./liste-jeux/liste-jeux.component";
import {DetailJeuxComponent} from "./detail-jeux/detail-jeux.component";
import {NewGameComponent} from "./new-game/new-game.component";
import {GiveAwayComponent} from "./give-away/give-away.component";

const routes: Routes = [
  { path: '',component : NavBarComponent , children:[
      { path: '', redirectTo: 'Accueil', pathMatch: 'full', },
      { path: 'Accueil', component: ListeJeuxComponent, },
      { path: 'Detail/:id', component: DetailJeuxComponent,},
      { path: 'News', component: NewGameComponent, },
      { path: 'Cadeaux', component: GiveAwayComponent, },
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
