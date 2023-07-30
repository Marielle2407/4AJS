 import { Component } from '@angular/core';
 import {GameServiceService} from "../services/game-service.service";

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent {
  constructor(private gameService: GameServiceService) {
  }
  news :any;
  pageSize = 1;
  currentPage = 1; //
  totalPages= 0 ;
  ngOnInit() {
    //recuperations de tout les news de l'api
    this.gameService.getAllNews().subscribe(data => {
      this.news= data
      this.news.forEach((iNew : any) => {
        iNew.article_content = iNew.article_content.replace(/<img\b[^>]*>|&lt;\/?img[^>]*&gt;|<iframe\b[^>]*>.*<\/iframe>|&lt;\/?iframe[^>]*&gt;/ig, '');
        this.totalPages = Math.ceil(this.news.length / this.pageSize);
        this.currentPage = 1;
      });

    });
  }
  get pagedNews() {

    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.news.slice(startIndex, startIndex + this.pageSize);
  }


  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

}
