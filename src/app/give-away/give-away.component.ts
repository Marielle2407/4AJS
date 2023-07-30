import { Component } from '@angular/core';
import {GameServiceService} from "../services/game-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-give-away',
  templateUrl: './give-away.component.html',
  styleUrls: ['./give-away.component.css']
})
export class GiveAwayComponent {
  constructor(private gameService: GameServiceService) {
  }
  gifs :any;
  ngOnInit() {
    //recuperations de tout les  giveaways de l'api
    this.gameService.getAllGifs().subscribe(data => {
      this.gifs= data

    });
  }

}
