import { Component, OnInit, Input, DoCheck } from '@angular/core';

import { Game } from '../games/game.model';

import { ShareDataService } from '../shared/share-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, DoCheck {

  games: Game[];
  cartLength: number;
  subtotal: number = 0;
  total: number = 0;
  frete: number = 0;
  gameList: any = [];
  gameListSize = 0;

  isCartEmpty = true;
  showIcon = false;

  constructor(private dataService: ShareDataService) { }

  ngOnInit() {
    this.cartLength = 0;
  }

  ngDoCheck() {

    this.gameList = this.dataService.data;
    this.gameList.length > 0 ? this.isCartEmpty = false : this.isCartEmpty = true;

    if (this.gameListSize != this.gameList.length) {
      this.calculateCart(this.gameList);
    }

    this.gameListSize = this.gameList.length;

  }

  calculateCart(gameList) {
    this.subtotal = 0;
    this.frete = 0;
    this.total = 0;

    for (let i = 0; i < gameList.length; i++) {
      this.subtotal += parseFloat(gameList[i].price);

      if (this.subtotal > 250) {
        this.frete = 0;
      } else {
        this.frete += 10;
      }

      this.total = this.subtotal + this.frete;
    }
  }

  removeItem(game) {
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
