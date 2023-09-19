import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cards } from '../I_Cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit{

  
  @Input() hotels: Cards[] = [];
  @Output() eventName = new EventEmitter<Cards>();
  constructor(){

  }
  ngOnInit(): void {
      
  }
  handleEvent(hotel: Cards){
    this.eventName.emit(hotel);
  }
}
