import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';

import { SharedModule } from '../shared/shared.module';
import { ShareDataService } from '../shared/share-data.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CartComponent],
  exports: [CartComponent],
  providers: [ShareDataService]
})
export class CartModule { }
