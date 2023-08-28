import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordleRoutingModule } from './wordle-routing.module';
import { WordleComponent } from './wordle.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {TranslateModule} from "../../shared/translate/translate.module";
import {PipesModule} from "../../shared/pipes/pipes.module";


@NgModule({
  declarations: [
    WordleComponent
  ],
  imports: [
    CommonModule,
    WordleRoutingModule,
    FontAwesomeModule,
    TranslateModule,
    PipesModule
  ]
})
export class WordleModule { }
