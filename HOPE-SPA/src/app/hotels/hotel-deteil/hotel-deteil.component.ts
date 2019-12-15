import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/_models/hotel';
import { HotelService } from 'src/app/_services/hotel.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Tour } from 'src/app/_models/tour';
import { HotelImages } from 'src/app/_models/hotelImages';

@Component({
  selector: 'app-hotel-deteil',
  templateUrl: './hotel-deteil.component.html',
  styleUrls: ['./hotel-deteil.component.css']
})
export class HotelDeteilComponent implements OnInit {

  constructor(private hotelService: HotelService, private route: ActivatedRoute, private alertify: AlertifyService) { }
hotel: Hotel;
hotelImages: HotelImages[];
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.hotel = data['hotel'];
    });
  //  this.loadHotel();
  }

//  loadHotel() {
//     this.hotelService.getHotel(+this.route.snapshot.params['id'])
//         .subscribe((hotel: Hotel) => {
//           this.hotel = hotel;
//         }, error => {
//           this.alertify.error(error);
//         }); // + конвертит в number из string
//   }


}
