import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tour } from '../_models/tour';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class TourService {
baseUrl = 'http://localhost:5000/api/';

constructor(private http: HttpClient) { }
getTours(): Observable<Tour[]> {
  return this.http.get<Tour[]>(this.baseUrl + 'tours', httpOptions);
}
getTour(id): Observable<Tour> {
  return this.http.get<Tour>(this.baseUrl + 'tours/' + id, httpOptions);
}
}
