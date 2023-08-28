import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordleRoutingModule } from './wordle-routing.module';
import { WordleComponent } from './wordle.component';


@NgModule({
  declarations: [
    WordleComponent
  ],
  imports: [
    CommonModule,
    WordleRoutingModule
  ]
})
export class WordleModule { }
