import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesComponent } from './games.component';

import { GamesService } from './games.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GamesComponent],
  exports: [GamesComponent],
  providers: [GamesService]
})
export class GamesModule { }
