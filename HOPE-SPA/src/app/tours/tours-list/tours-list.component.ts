import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/app/_models/tour';
import { TourService } from 'src/app/_services/tour.service';

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.css']
})
export class ToursListComponent implements OnInit {
  tours: Tour[];
  constructor(private tourService: TourService) { }

  ngOnInit() {
    this.loadTours();
  }
  loadTours() {
    this.tourService.getTours().subscribe((tours: Tour[]) => {
      this.tours = tours;
    }, error => {
      console.log(error);
    });
  }

}
