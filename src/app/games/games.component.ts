import { Component, OnInit, OnChanges } from '@angular/core';

import { GamesService } from './games.service';

import { Game } from './game.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit  {

  filterOptions: any[];
  games: any;
  gameFilter: any;

  constructor(private gService: GamesService) { }

  ngOnInit() {
    this.filterOptions = this.gService.getFilterOptions();
    this.gameFilter = this.filterOptions[0];

    this.gService
      .getGames()
      .subscribe(
        res => this.games = res,
        err => console.log(err)
      );
  }

  getSelectedValue() {
    this.filterGames(this.gameFilter)
  }

  filterGames(filterOption: any) {
    switch (parseInt(filterOption)) {
      case 0:
        this.games = this.games.sort((a, b) => a.price > b.price);
        break;
      case 1:
        this.games = this.games.sort((a, b) => a.score > b.score);
        break;
      case 2:
        this.games = this.games.sort((a, b) => a.name > b.name);
        break;
      default:
        console.log('Opção inválida');
        break;
    }

  }



}
