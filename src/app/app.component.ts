import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
      quotes = [
        new Quote(1,'never give up','Stella',Date(12/4/1999),
        new Quote(2,'Be strong','Barbie',Date(19/5/2000),

      ]
}
