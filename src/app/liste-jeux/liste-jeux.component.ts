import { Component } from '@angular/core';
import {GameServiceService} from "../services/game-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-liste-jeux',
  templateUrl: './liste-jeux.component.html',
  styleUrls: ['./liste-jeux.component.css']
})
export class ListeJeuxComponent {
  constructor(private gameService: GameServiceService,private router :Router) {
  }

  games:any;
  pageSize = 9; // vu qu'il y'as de la pagination on a  9 jeux par  pages
  currentPage = 1; // on est  toujours sur la pages 1
  totalPages= 0 ; // total de page de jeux qu'on aura soit totaldejeux/ pageSize a valeur absolu
  searchTerm =""; // termes de recherche saisi
  filterGames: any[]=[];// listes de jeu  apres les filtrages

  selPlatform='';// platform choisi
  selCategory ='';// category  choisi
  selSortBy='';// triages choisi


// liste des plateforme  de l'api
  platforms = [
    {name: 'PC', value: 'pc'},
    {name: 'Browser', value: 'browser'},
    {name: 'All', value: 'all'},

  ];
 // liste de toutes les categories se trouvant dans l'api
  categories = [
    {name: 'MMORPG', value: 'mmorpg'},
    {name: 'SHOOTER', value: 'shooter'},
    {name: 'STRATEGY', value: 'strategy'},
    {name: 'MOBA', value: 'moba'},
    {name: 'RACING', value: 'racing'},
    {name: 'SPORTS', value: 'sports'},
    {name: 'SOCIAL', value: 'social'},
    {name: 'SANDBOX', value: 'sandbox'},
    {name: 'OPEN-WORLD', value: 'open-world'},
    {name: 'SURVIVAL', value: 'survival'},
    {name: 'PVP', value: 'pvp'},
    {name: 'PVE', value: 'pve'},
    {name: 'PIXEL', value: 'pixel'},
    {name: 'VOXEL', value: 'voxel'},
    {name: 'ZOMBIE', value: 'zombie'},
    {name: 'TURN-BASED', value: 'turn-based'},
    {name: 'FIRST-PERSON', value: 'first-person'},
    {name: 'THIRD-PERSON', value: 'third-person'},
    {name: 'TOP-DOWN', value: 'top-down'},
    {name: 'TANK', value: 'tank'},
    {name: 'SPACE', value: 'space'},
    {name: 'SAILING', value: 'sailing'},
    {name: 'SIDE-SCROLLER', value: 'side-scroller'},
    {name: 'SUPERHERO', value: 'superhero'},
    {name: 'PERMADEATH', value: 'permadeath'},
    {name: 'CARD', value: 'card'},
    {name: 'BATTLE-ROYALE', value: 'battle-royale'},
    {name: 'MMOFPS', value: 'mmofps'},
    {name: 'MMOTPS', value: 'mmotps'},
    {name: '3D', value: '3d'},
    {name: '2D', value: '2d'},
    {name: 'ANIME', value: 'anime'},
    {name: 'FANTASY', value: 'fantasy'},
    {name: 'SCI-FI', value: 'sci-fi'},
    {name: 'FIGHTING', value: 'fighting'},
    {name: 'ACTION-RPG', value: 'action-rpg'},
    {name: 'ACTION', value: 'action'},
    {name: 'MILITARY', value: 'military'},
    {name: 'MARTIAL-ARTS', value: 'martial-arts'},
    {name: 'FLIGHT', value: 'flight'},
    {name: 'LOW-SPEC', value: 'low-spec'},
    {name: 'TOWER-DEFENSE', value: 'tower-defense'},
    {name: 'HORROR', value: 'horror'},
    {name: 'MMORTS', value: 'mmorts'}
  ];
  // liste des elements pour lequel  nous pouvons trier nos jeux
  sortsBys = [
    {
      name: 'Date de sortie',
      value: 'release-date'
    },
    {
      name: 'Popularité',
      value: 'popularity'
    },
    {
      name: 'Alphabétique',
      value: 'alphabetical'
    },
    {
      name: 'Pertinence',
      value: 'relevance'
    }
  ];

  ngOnInit() {
    //recuperations de tout les  jeux de l'api
    this.gameService.getAllGames().subscribe(data => {
      this.games = data
      this.filterGamesByName();
      this.getGames(this.selPlatform, this.selCategory, this.selSortBy);
    });
  }

  getGames(platform: string, category: string, sortBy: string) {
    // recuperations des jeux des jeux par filtrage
    this.gameService.getGamesByFilter(platform, category, sortBy)
      .subscribe(data => {
        this.games = data;
        this.filterGames=this.games;
        this.totalPages = Math.ceil(this.filterGames.length / this.pageSize);
        this.currentPage = 1;
        console.log("1"+category);
        console.log("2"+platform);
        console.log("3"+sortBy);
      });
  }

  filterGamesByName() {
    // la recherche d'un jeu a partir de son nom
    // l'api  ne fournit pas de requete pour cela donc voici  comment est  faites la recherche de facons simple et interactive
    if (this.searchTerm.trim() !== '') {
      this.filterGames = this.games.filter((game:any) =>
        game.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    else {
      this.filterGames = this.games;
    }
    this.totalPages = Math.ceil(this.filterGames.length / this.pageSize);
    this.currentPage = 1;
  }


  onChangeInput() {
    // on appele la fonction de recherche a chaque fois qu'un  caractere en saisi
    this.filterGamesByName();
  }

  onChangeCate() {
    // on actualise les filtres a chaque fois que la categories change change
    this.getGames(this.selPlatform, this.selCategory, this.selSortBy);
  }

  onChangeSort() {
    // chaque fois que le trie  change
    this.getGames(this.selPlatform, this.selCategory, this.selSortBy);
  }

  onChangePlat() {
    // a chaque fois que la platforme change
    this.getGames(this.selPlatform, this.selCategory, this.selSortBy);
  }

  get pagedGames() {
    //permet  de retourner les elements d'une pagination (d'une pages )
    // c'est  un  getter qui  est  recalculer automatique a chaque changement
    // ce qui  est  plus efficasse
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filterGames.slice(startIndex, startIndex + this.pageSize);
  }


  goToFirstPage() {
    this.currentPage = 1;
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
  goToLastPage() {
    this.currentPage = this.totalPages;
  }
//
  detailGame(id : number){
    this.router.navigate(['Detail/'+id])
  }


}
