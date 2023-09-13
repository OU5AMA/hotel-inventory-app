import { Component, Input, OnInit } from '@angular/core';
import { Cards } from './I_Cards';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss'],
})
export class HotelsListComponent implements OnInit {
  @Input() cards: Cards[] = [];

  constructor() {}
  ngOnInit(): void {
    this.cards=[
      {
        "name": "Marrakech Luxury Resort",
        "image_url": "../../assets/hotels/Marrakech luxury resort.png",
        "location": "Marrakech, Morocco",
        "amenities": ["Swimming Pool", "Spa", "Fine Dining", "Free Wi-Fi"]
      },
      {
        "name": "Casablanca Beachfront Hotel",
        "image_url": "../../assets/hotels/casablance on the ocean.jpg",
        "location": "Casablanca, Morocco",
        "amenities": ["Beach Access", "Fitness Center", "Restaurant", "Bar"]
      },
      {
        "name": "Atlas Mountains Retreat",
        "image_url": "../../assets/hotels/Atlas montains.jpg",
        "location": "Atlas Mountains, Morocco",
        "amenities": ["Scenic Views", "Hiking Trails", "Fireplace", "Restaurant"]
      },
      {
        "name": "Fez Historic Palace",
        "image_url": "../../assets/hotels/fez.jpg",
        "location": "Fez, Morocco",
        "amenities": ["Historic Architecture", "Courtyard Garden", "Restaurant", "Free Breakfast"]
      },
      {
        "name": "Essaouira Beachside Resort",
        "image_url": "../../assets/hotels/essaouira.jpg",
        "location": "Essaouira, Morocco",
        "amenities": ["Beachfront Views", "Poolside Bar", "Spa", "Fitness Center"]
      }
    ]
    
    
  }
}
