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
    Type: "Deluxe",
    Price: 120,
    amenities: ["Air Conditioner", "Free Wi-Fi", "TV", "Bathroom", "Kitchen"],
    ChekingTime: new Date('22-Nov-2022')
  },
  {
    Number: 2,
    Type: "suit",
    Price: 300,
    amenities: ["Air Conditioner", "Free Wi-Fi", "TV", "Bathroom", "Kitchen"],
    ChekingTime: new Date("12-Mar-2023")
  },
  {
    Number: 24,
    Type: "ordinary",
    Price: 30,
    amenities: ["Free Wi-Fi", "TV", "Bathroom"],
    ChekingTime: new Date("12-Mar-2023")
  },
  {
    Number: 53,
    Type: "suit",
    Price: 430,
    amenities: ["Air Conditioner", "Free Wi-Fi", "TV", "Bathroom", "Kitchen"],
    ChekingTime: new Date("2-Mar-2023")
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
