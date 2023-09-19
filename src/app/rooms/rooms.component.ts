import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-room',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsComponent implements OnInit{


nameOfHotel = "List of Hotels"
rating = 5;
swimmingPool = false;
rooms: Room = {
  availableRooms: 0,
  bookedRooms: 20,
  totalRooms: 30
}

@Input() roomList: RoomList[] = [];

constructor(){
}

ngOnInit(): void {
  this.roomList = [
    {
      Number: 13,
      Type: "Deluxe",
      Price: 120,
      amenities: ["Air Conditioner", "Free Wi-Fi", "TV", "Bathroom", "Kitchen"],
      CheckInTime: new Date('22-November-2022'),
      CheckOutTime: new Date("12-November-2023"),
      booked: false
    },
    {
      Number: 2,
      Type: "suit",
      Price: 300,
      amenities: ["Air Conditioner", "Free Wi-Fi", "TV", "Bathroom", "Kitchen"],
      CheckInTime: new Date("12-Mars-2023"),
      CheckOutTime: new Date("12-November-2023"),
      booked: false
    },
    {
      Number: 24,
      Type: "ordinary",
      Price: 30,
      amenities: ["Free Wi-Fi", "TV", "Bathroom"],
      CheckInTime: new Date("12-Mars-2023"),
      CheckOutTime: new Date("12-November-2023"),
      booked: false
    },
    {
      Number: 53,
      Type: "suit",
      Price: 430,
      amenities: ["Air Conditioner", "Free Wi-Fi", "TV", "Bathroom", "Kitchen"],
      CheckInTime: new Date("2-October-2023"),
      CheckOutTime: new Date("12-November-2023"),
      booked: true
    }
  ]
  console.log(this.roomList);
}
toggle(){
  this.swimmingPool = !this.swimmingPool;
}


handleCustomEvent(room: RoomList){
  room.booked = !room.booked;
}
}
