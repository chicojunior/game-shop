import { Component, OnInit, Input, DoCheck, OnChanges, SimpleChanges, IterableDiffers } from '@angular/core';

import { Game } from '../games/game.model';

import { ShareDataService } from '../shared/share-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, DoCheck, OnChanges {

  @Input() cartGameList: any;

  private differ: IterableDiffers;

  games: Game[];
  cartLength: number;
  subtotal: number = 0;
  total: number = 0;
  frete: number = 0;

  gameList: any = [];
  gameListSize = 0;

  isCartEmpty = true;
  showIcon = false;

  constructor(private dataService: ShareDataService, private differs: IterableDiffers) {
    this.differ = differs;
  }

  ngOnInit() {

    this.cartLength = 0;

    // this.dataService.updateData().subscribe(res => this.gameList = res);

  }

  ngOnChanges(changes: SimpleChanges) {
    this.addToCart(this.gameList);
  }

  ngDoCheck() {

    this.gameList = this.dataService.data;
    this.gameList.length > 0 ? this.isCartEmpty = false : this.isCartEmpty = true;

    // this.gameListSize = 0;
    // const changes = this.differ.find(this.dataService.data);

    // debugger

    if (this.gameListSize != this.gameList.length) {
      this.addToCart(this.gameList);
    }

    this.gameListSize = this.gameList.length;

  }

  addToCart(gameList) {
    this.subtotal = 0;
    for (let i = 0; i < gameList.length; i++) {
      this.subtotal += parseFloat(gameList[i].price);
    }
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
