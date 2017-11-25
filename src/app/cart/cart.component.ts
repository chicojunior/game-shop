import { Component, OnInit, Input } from '@angular/core';

import { Game } from '../games/game.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() game: Game;

  games: Game[];
  cartLength: number;

  isCartEmpty = true;

  constructor() { }

  ngOnInit() {

    this.cartLength = 0;

  }

}
