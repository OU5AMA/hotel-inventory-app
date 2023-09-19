import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})
export class RoomsListComponent implements OnInit {
  @Input() rooms: RoomList[] = [];
  @Output() customEvent = new EventEmitter<RoomList>();
  constructor() {}
  ngOnInit(): void {}
  selectRoom(room: RoomList){
    this.customEvent.emit(room);
  }
  addRoom(){
    const room: RoomList = {
      Number: 32,
      Type: "Royal-suit",
      Price: 2000,
      amenities: ["Air Conditioner", "Free Wi-Fi", "TV", "Bathroom", "Kitchen", "private pool"],
      CheckInTime: new Date("4-December-2023"),
      CheckOutTime: new Date("6-December-2023"),
      booked: true
    }
    // this.rooms.push(room);
    this.rooms = [...this.rooms, room];
    
    console.log(this.rooms);
  }
}
