import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { GamesComponent } from './games.component';

import { GamesService } from './games.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [GamesComponent],
  exports: [GamesComponent],
  providers: [GamesService]
})
export class GamesModule { }
