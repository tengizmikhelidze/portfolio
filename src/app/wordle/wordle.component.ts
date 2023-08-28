import {Component, HostListener, QueryList, ViewChildren} from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faBackspace, faCog} from "@fortawesome/free-solid-svg-icons";
import {TranslateService} from "../../shared/translate/services/translate.service";
import {WordleTranslate} from "./translate/transalte";
import {Translate} from "../../shared/translate/interfaces/translate.interface";

@Component({
  selector: 'app-wordle',
  templateUrl: './wordle.component.html',
  styleUrls: ['./wordle.component.scss']
})
export class WordleComponent {
  readonly settingsIcon: IconDefinition = faCog
  readonly backspaceIcon: IconDefinition = faBackspace
  readonly WordleTranslate: Translate = WordleTranslate
  lastFocusedInput!: HTMLInputElement | undefined;
  wordleLanguage: 'geo' | 'eng' = 'eng';
  showSettings: boolean = false;
  @ViewChildren('wordInput') inputs!: QueryList<HTMLInputElement>;

  constructor(public translateService: TranslateService) {
  }

  @HostListener('click', ['$event.target']) onClick(e: any) {
    if(e instanceof HTMLButtonElement && e.dataset["key"]){
      let key = e.dataset["key"];

      if(key !== "ENTER" && key !== "Backspace"){
        // @ts-ignore
        this.lastFocusedInput["value"] = key
        for(let input of this.inputs["_results"]){
          if(!input.nativeElement.value){
            input.nativeElement.focus();
            this.lastFocusedInput = input.nativeElement;
            break;
          }
        }
      }

      if(key === "Backspace"){
        // @ts-ignore
        for(let index = 0; index < this.inputs["_results"].length; index ++){
          let input = this.inputs["_results"][index]
          if(input.nativeElement === this.lastFocusedInput && index !== 0){
            if(input.nativeElement.value){
              // @ts-ignore
              this.lastFocusedInput.value = ""
              // @ts-ignore
              this.lastFocusedInput.focus();
            } else {
              let previnput = this.inputs["_results"][index-1]
              if(previnput.nativeElement instanceof HTMLInputElement){
                previnput.nativeElement.value = ""
                this.lastFocusedInput = previnput.nativeElement;
                // @ts-ignore
                this.lastFocusedInput.focus();
              }
            }
            break;
          }
        }
      }
    }
  }

  submitWord() {
    console.log('submit')
  }
}
