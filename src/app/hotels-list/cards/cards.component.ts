import { Component, OnInit, Input } from '@angular/core';
import { Cards } from '../I_Cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit{

  
  @Input() hotels: Cards[] = [];
  constructor(){

  }
  ngOnInit(): void {
      
  }
}
