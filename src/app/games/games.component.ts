import { Component, OnInit } from '@angular/core';

import { GamesService } from './games.service';

import { Game } from './game.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  filterOptions: any[];
  games: Game;

  constructor(private gService: GamesService) { }

  ngOnInit() {

    this.filterOptions = this.gService.getFilterOptions();

    this.gService
      .getGames()
      .subscribe(
        res => this.games = res,
        err => console.log(err)
      );


  }

}
