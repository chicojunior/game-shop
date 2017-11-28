import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { GamesComponent } from './games.component';

import { GamesService } from './games.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  declarations: [GamesComponent],
  exports: [GamesComponent],
  providers: [GamesService]
})
export class GamesModule { }
