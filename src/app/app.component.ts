import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    this.setDevicePreferredTheme()
  }
  private setDevicePreferredTheme(){
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    document.body.classList.toggle('dark', prefersDark.matches)
  }
}
