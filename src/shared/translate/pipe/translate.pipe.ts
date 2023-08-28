import {Pipe, PipeTransform} from '@angular/core';
import {Translate} from "../interfaces/translate.interface";
import {TranslateService} from "../services/translate.service";

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  constructor(private translateService: TranslateService) {
  }
  transform(value: string | {geo: string, eng: string}, translate: Translate): string {
    let language = this.translateService.language
    if(typeof value === 'string' && language !== 'eng'){
      return translate[language][value.toLowerCase()] ? translate[language][value.toLowerCase()] : value
    } else if(typeof value === "object") {
      return value[language]
    } else return value
  }

}
