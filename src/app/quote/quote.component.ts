import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quotes= [
      new Quote(1,'One of the happiest moments is having the courage to let go of something yo cannot change','Annstella Kagai')
      new Quote(2,'Creativity takes courage','Henri Matisse',new date(1999/8/3))
    ]
  constructor() { }

  ngOnInit() {
  }

}
