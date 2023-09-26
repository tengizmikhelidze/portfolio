import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {PipesModule} from "../../shared/pipes/pipes.module";
import {TranslateModule} from "../../shared/translate/translate.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PipesModule,
    TranslateModule
  ]
})
export class HomeModule { }
