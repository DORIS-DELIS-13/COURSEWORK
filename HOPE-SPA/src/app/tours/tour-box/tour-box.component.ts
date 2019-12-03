import { Component, OnInit, Input } from '@angular/core';
import { Tour } from 'src/app/_models/tour';
import { Hotel } from 'src/app/_models/hotel';

@Component({
  selector: 'app-tour-box',
  templateUrl: './tour-box.component.html',
  styleUrls: ['./tour-box.component.css']
})
export class TourBoxComponent implements OnInit {
  @Input() tour: Tour;
 // @Input() hotel: Hotel;
  constructor() { }

  ngOnInit() {
  }

}
