import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { GamesComponent } from './games.component';

import { GamesService } from './games.service';

import { SharedModule } from '../shared/shared.module';
import { ShareDataService } from '../shared/share-data.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    SharedModule
  ],
  declarations: [GamesComponent],
  exports: [GamesComponent],
  providers: [GamesService, ShareDataService]
})
export class GamesModule { }
