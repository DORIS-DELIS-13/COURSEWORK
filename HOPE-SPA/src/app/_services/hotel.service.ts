import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../_models/hotel';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  baseUrl = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) { }
  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.baseUrl + 'hotel', httpOptions);
  }
  getHotel(id): Observable<Hotel> {
    return this.http.get<Hotel>(this.baseUrl + 'hotel/' + id, httpOptions);
  }
}
