import { Component } from '@angular/core';
import {GameServiceService} from "../services/game-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-jeux',
  templateUrl: './detail-jeux.component.html',
  styleUrls: ['./detail-jeux.component.css']
})
export class DetailJeuxComponent {

  constructor(private gameService: GameServiceService ,private activeRoute : ActivatedRoute) {
  }

  game: any;
  private  id :any ;
  ngOnInit() {
    this.activeRoute.paramMap.subscribe(
      params =>{this.id =params.get('id')}
    );
    this.gameService.getGameById(this.id)
      .subscribe(data => {this.game = data
      console.log(this.game)}
      );
  }
}
