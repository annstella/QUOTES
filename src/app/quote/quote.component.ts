import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quotes = [
      new Quote(1, 'Never give up', 'Albert Enstein', 'Stella', 0, 0, new  Date(2018, 3, 14 )),
      new Quote(2, 'Yes we can', 'Barack Obama', 'Barbie', 0, 0, new Date(2015, 6, 9)),
      new Quote(3, 'What does not kill you makes you stronger', 'Kelly Clarkson', 'Brian', 0, 0 , new Date(2009, 3, 14)),
    ];


    addNewQuote(quote) {
      this.quotes.push(quote);
    }
    deleteQuote(isComplete, index) {
            if (isComplete) {
                const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`);
                if (toDelete) {
                    this.quotes.splice(index, 1);
                }
            }
        }

toogleDetails(index) {
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }

  constructor() { }

  ngOnInit() {
  }

}
