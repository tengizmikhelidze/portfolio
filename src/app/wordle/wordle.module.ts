import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordleRoutingModule } from './wordle-routing.module';
import { WordleComponent } from './wordle.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    WordleComponent
  ],
  imports: [
    CommonModule,
    WordleRoutingModule,
    FontAwesomeModule
  ]
})
export class WordleModule { }
