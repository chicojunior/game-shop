import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Game } from './game.model';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GamesService {

  games: Game[];
  options: any[];

  constructor(private http: Http) { }

  getFilterOptions() {
    /*
      Em um cenário real seria uma chamada http...
    */
    this.options = [
      { value: 0, option: 'filtrar por preço' },
      { value: 1, option: 'filtrar por popularidade' },
      { value: 2, option: 'filtrar por ordem alfabética' }
    ]

    return this.options;
  }

  getGames(): Observable<any> {
    const url = './assets/data/game-data.json';

    return this.http.get(url)
      .map(res => res.json())
      .catch(err => {
        throw new Error(err.message);
      })
  }



}
