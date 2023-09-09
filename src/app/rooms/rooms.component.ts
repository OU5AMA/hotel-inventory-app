import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit{

// interpolation variable
nameOfHotel = "Helton Hotel"
rating = 5;
swimmingPool = false;
rooms: Room = {
  availableRooms: 39,
  bookedRooms: 11,
  totalRooms: 50
}

ngOnInit(): void {}
toggle(){
  this.swimmingPool = !this.swimmingPool;
}

}
