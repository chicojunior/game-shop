import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareDataService } from './share-data.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [],
  providers: [ ShareDataService ]
})
export class SharedModule { }
