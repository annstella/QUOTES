import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quotes = [
      new Quote(1,'never give up','Stella',Date(12/4/1999),
      new Quote(2,'Be strong','Barbie',Date(19/5/2000),
    ]
  constructor() { }

  ngOnInit() {
  }

}
