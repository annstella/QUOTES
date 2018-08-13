import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quotes = [
      new Quote(1, 'Never give up', 'Albert Enstein', 'Stella', 0, 0, Date()),
      new Quote(2, 'Yes we can', 'Barack Obama', 'Barbie', 0, 0, Date()),
      new Quote(3, 'What does not kill you makes you stronger', 'Kelly Clarkson', 'Brian', 0, 0 , Date()),
    ];

completeQuote(isComplete, index) {
           if (isComplete) {
               this.quotes.splice(index, 1);
               }
               }

toogleDetails(index) {
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }

  constructor() { }

  ngOnInit() {
  }

}
