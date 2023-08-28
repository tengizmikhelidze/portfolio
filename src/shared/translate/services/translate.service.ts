import { Injectable } from '@angular/core';
import {Languages} from "../types/language.type";

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private defaultLang: Languages = 'eng'
  private currentLang: Languages = 'eng'
  constructor() { }

  changeLang(lang: Languages){
    this.currentLang = lang
  }

  get language(): Languages {
    return this.currentLang
  }
}
