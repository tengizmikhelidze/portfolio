import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {PipesModule} from "../../pipes/pipes.module";
import {TranslateModule} from "../../translate/translate.module";
import {RouterLink, RouterLinkActive} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    PipesModule,
    TranslateModule,
    RouterLink,
    RouterLinkActive
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
