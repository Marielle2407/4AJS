import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  baseUrl = "https://mmo-games.p.rapidapi.com/"
  headers  = new HttpHeaders({
    'X-RapidAPI-Key': 'ab3b36b054msh54e7eb81ef7623dp16ce21jsndfb2a9c5b829',
    'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
  })
  constructor(private http:HttpClient) { }

  getAllGames(){

    return this.http.get(this.baseUrl+"games", { headers: this.headers });

  }
  getGameById(id: string) {

    let params = new HttpParams().set('id', id);

    return this.http.get(this.baseUrl+"game", { headers: this.headers, params });
  }

  getGamesByFilter(platform: string, category: string, sortBy: string) {
    let params = new HttpParams();
    if (platform && platform.trim() !== '') {
      params = params.set('platform', platform);
    }

    if (category && category.trim() !== '') {
      params = params.set('category', category);
    }

    if (sortBy && sortBy.trim() !== '') {
      params = params.set('sort-by', sortBy);
    }

    return this.http.get(this.baseUrl+"games", {
      headers: this.headers,
      params
    });
  }
  getAllGifs(){

    return this.http.get(this.baseUrl+"giveaways", { headers: this.headers });

  }
  getAllNews(){

    return this.http.get(this.baseUrl+"latestnews", { headers: this.headers });

  }
}

