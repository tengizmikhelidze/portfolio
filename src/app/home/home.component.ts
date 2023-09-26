import { Component } from '@angular/core';
import {HomeTranslate} from "./translate/home.translate";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly HomeTranslate = HomeTranslate
}
