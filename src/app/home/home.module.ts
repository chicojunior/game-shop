import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home.component';

import { GamesModule } from '../games/games.module';
import { CartModule } from '../cart/cart.module';

@NgModule({
  imports: [
    CommonModule,
    GamesModule,
    CartModule,
    HttpModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
