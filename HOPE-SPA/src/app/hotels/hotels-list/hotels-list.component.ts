import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/_models/hotel';
import { HotelService } from 'src/app/_services/hotel.service';
import { PaginatedResult, Pagination } from 'src/app/_models/pagination';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {
  hotels: Hotel[];
 pagination: Pagination;
  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.loadHotels();
  }

  loadHotels() {
    this.hotelService.getHotels(this.pagination.currentPage, this.pagination.itemsPerPage).subscribe((res: PaginatedResult<Hotel[]>) => {
      this.hotels = res.result;
      this.pagination = res.pagination;
    }, error => {
      console.log(error);
    });
  }
}
