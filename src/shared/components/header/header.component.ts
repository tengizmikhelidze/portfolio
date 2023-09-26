import {Component} from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {faUserCircle} from "@fortawesome/free-regular-svg-icons";
import {faFacebookF, faGithub, faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {environment} from "../../../environments/environment";
import {TranslateService} from "../../translate/services/translate.service";
import {HeaderTranslate} from "./translate/header.translate";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly userIcon : IconDefinition = faUserCircle
  readonly githubIcon : IconDefinition = faGithub
  readonly linkedinIcon : IconDefinition = faLinkedinIn
  readonly facebookIcon : IconDefinition = faFacebookF
  readonly instagramIcon : IconDefinition = faInstagram
  readonly environment = environment;
  readonly HeaderTranslate = HeaderTranslate;
  showSettings: boolean = false;

  constructor(public translateService: TranslateService) {
  }

  isDarkTheme():boolean{
    return document.body.classList.contains("dark")
  }

  setTheme(theme: 'dark' | 'light'){
    document.body.classList.toggle('dark', theme === 'dark')
    document.body.classList.toggle('light', theme === 'light')
  }
}
