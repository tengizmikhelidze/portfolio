import { Component } from '@angular/core';
import {FirebaseService} from "../shared/firebase/firebase.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private firebaseService: FirebaseService) {
    this.firebaseService.get("words").subscribe((data)=>{console.log(data)})
  }
  title = 'portfolio';
}
