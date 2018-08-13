import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quotes = [
      new Quote(1, 'Never give up', 'Albert Enstein' 'Stella', Date(12 / 4 / 1999)),
      new Quote(2, 'Yes we can', 'Barack Obama' 'Barbie', Date(19 / 5 / 2000)),
    ];
  constructor() { }

  ngOnInit() {
  }

}
