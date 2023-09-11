import { Component, OnInit } from '@angular/core';
import { Input } from 'postcss';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit{

  @Input() rooms : RoomList[] = [];
  constructor(){}
  ngOnInit(): void {
      
  }
}
