import { Component, OnInit, Input, DoCheck } from '@angular/core';

import { Game } from '../games/game.model';

import { ShareDataService } from '../shared/share-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, DoCheck {

  @Input() game: Game;

  games: Game[];
  cartLength: number;

  gameList: any = [];

  isCartEmpty = true;
  showIcon = false;

  constructor(private dataService: ShareDataService) { }

  ngOnInit() {

    this.cartLength = 0;

    // this.dataService.updateData().subscribe(res => this.gameList = res);

  }

  ngDoCheck() {
    this.gameList = this.dataService.data;

    this.gameList.length > 0 ? this.isCartEmpty = false : this.isCartEmpty = true;

    console.log(this.gameList);
    // this.dataService.updateData().subscribe(res => this.gameList = res);
  }

  removeItem(game) {
    console.log(game);
    console.log(this.gameList.indexOf(game));

    let index = this.gameList.indexOf(game);
    if (index > -1) {
      this.gameList.splice(index, 1);
    }
  }

  showButton(game) {
    this.showIcon = true;

  }

  hideButton(game) {
    this.showIcon = false;
  }



}
