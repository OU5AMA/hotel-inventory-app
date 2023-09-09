import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit{

// interpolation variable
nameOfHotel = "Helton Hotel"
rating = 5;
ngOnInit(): void {}


}
