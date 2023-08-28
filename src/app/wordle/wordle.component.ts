import {AfterViewInit, Component, HostListener, OnInit, QueryList, ViewChildren} from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faBackspace, faCog} from "@fortawesome/free-solid-svg-icons";
import {doc} from "@angular/fire/firestore";
import {TranslateService} from "../../shared/translate/services/translate.service";

@Component({
  selector: 'app-wordle',
  templateUrl: './wordle.component.html',
  styleUrls: ['./wordle.component.scss']
})
export class WordleComponent {
  readonly settingsIcon: IconDefinition = faCog
  readonly backspaceIcon: IconDefinition = faBackspace
  lastFocusedInput!: HTMLInputElement | null
  @ViewChildren('wordInput') inputs!: QueryList<HTMLInputElement>;

  constructor(public translateService: TranslateService) {
  }

  @HostListener('click', ['$event.target']) onClick(e: any) {
    if(e instanceof HTMLButtonElement){
      let key = e.dataset["key"];
      if(key !== "ENTER" && key !== "Backspace"){
        // @ts-ignore
        this.lastFocusedInput["value"] = key
        for(let input of this.inputs["_results"]){
          console.log(input.nativeElement.value)
          if(!input.nativeElement.value){
            input.nativeElement.focus();
            this.lastFocusedInput = input.nativeElement;
            break;
          }
        }
      }
    }
  }
}
