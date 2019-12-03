import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/_models/hotel';
import { HotelService } from 'src/app/_services/hotel.service';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {
  hotels: Hotel[];
  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.loadHotels();
  }

  loadHotels() {
    this.hotelService.getHotels().subscribe((hotels: Hotel[]) => {
      this.hotels = hotels;
    }, error => {
      console.log(error);
    });
  }
}
