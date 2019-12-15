import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/app/_models/tour';
import { TourService } from 'src/app/_services/tour.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from 'src/app/_services/hotel.service';
import { Hotel } from 'src/app/_models/hotel';
import { PaginatedResult, Pagination } from 'src/app/_models/pagination';
import { PageChangedEvent } from 'ngx-bootstrap';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.css']
})
export class TourDetailComponent implements OnInit {
 tour: Tour;
 hotels: Hotel[];
 pagination: Pagination;

 // tslint:disable-next-line:max-line-length
 constructor(private tourService: TourService, private hotelService: HotelService, private route: ActivatedRoute, private alertify: AlertifyService) { }
   ngOnInit() {
     this.route.data.subscribe(data => {
       this.tour = data['tour'];
   });
  // this.loadTour();
}


  // loadTour() {
  //   this.tourService.getTour(+this.route.snapshot.params['id'])
  //       .subscribe((tour: Tour) => {
  //         this.tour = tour;
  //       }, error => {
  //         this.alertify.error(error);
  //       }); // + конвертит в number из string
  // }

  // loadHotels() {
  //   this.hotelService.getHotels().subscribe((hotels: Hotel[]) => {
  //     this.hotels = hotels;
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  pageChanged(event: PageChangedEvent): void {
    this.pagination.currentPage = event.page;
    this.loadHotels();
  }

  loadHotels() {
    this.hotelService.getHotels(this.pagination.currentPage, this.pagination.itemsPerPage)
      .subscribe((res: PaginatedResult<Hotel[]>) => {
        this.hotels = res.result;
        this.pagination = res.pagination;
    }, error => {
      this.alertify.error(error);
    });
  }
}
