import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/app/_models/tour';
import { TourService } from 'src/app/_services/tour.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/_services/hotel.service';
import { Hotel } from 'src/app/_models/hotel';

@Component({
  selector: 'app-tour-deteil',
  templateUrl: './tour-deteil.component.html',
  styleUrls: ['./tour-deteil.component.css']
})
export class TourDeteilComponent implements OnInit {
 tour: Tour;
 hotels: Hotel[];

  // tslint:disable-next-line:max-line-length
  constructor(private tourService: TourService, private hotelService: HotelService, private route: ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadHotels();
  }

  loadTour() {
    this.tourService.getTour(+this.route.snapshot.params['id'])
        .subscribe((tour: Tour) => {
          this.tour = tour;
        }, error => {
          this.alertify.error(error);
        }); // + конвертит в number из string
  }

  loadHotels() {
    this.hotelService.getHotels().subscribe((hotels: Hotel[]) => {
      this.hotels = hotels;
    }, error => {
      console.log(error);
    });
  }
}
