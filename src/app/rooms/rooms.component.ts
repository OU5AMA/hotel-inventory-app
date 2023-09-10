import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit{


nameOfHotel = "Helton Hotel"
rating = 5;
swimmingPool = false;
rooms: Room = {
  availableRooms: 0,
  bookedRooms: 20,
  totalRooms: 30
}

roomList: RoomList[] =[
  {
    Number: 13,
    Type: "ordinary",
    Price: 120,
    amenities: true,
    ChekingTime: "1:30am"
  },
  {
    Number: 2,
    Type: "suit",
    Price: 300,
    amenities: true,
    ChekingTime: "2:30am"
  },
  {
    Number: 53,
    Type: "suit",
    Price: 30,
    amenities: false,
    ChekingTime: "12:30am"
  }
]

constructor(){
  console.log(this.nameOfHotel);
}

ngOnInit(): void {}
toggle(){
  this.swimmingPool = !this.swimmingPool;
}

}
