import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/_models/hotel';

@Component({
  selector: 'app-hotel-box',
  templateUrl: './hotel-box.component.html',
  styleUrls: ['./hotel-box.component.css']
})
export class HotelBoxComponent implements OnInit {
@Input() hotel: Hotel;
  constructor() { }

  ngOnInit() {
  }

}
