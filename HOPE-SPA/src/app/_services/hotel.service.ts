import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../_models/hotel';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PaginatedResult } from '../_models/pagination';
import { map } from 'rxjs/operators';

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
  getHotels(page?, itemsPerPage?): Observable<PaginatedResult<Hotel[]>> {
    const paginatedResult: PaginatedResult<Hotel[]> = new PaginatedResult<Hotel[]>();
    let params  = new HttpParams();
    if (page != null && itemsPerPage != null) {
      params =  params.append('pageNumber', page);
      params = params.append('pageSize', itemsPerPage);
    }
    return this.http.get<Hotel[]>(this.baseUrl + 'posters', {observe: 'response', params })
      .pipe(
        map(response => {
          paginatedResult.result = response.body;
          if (response.headers.get('Pagination') != null) {
            paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
          }
            return paginatedResult;
        })
      );
  }
  getHotel(id): Observable<Hotel> {
    return this.http.get<Hotel>(this.baseUrl + 'hotel/' + id, httpOptions);
  }
  upload(formData) {
    return this.http.request('https://localhost:5000/api/posters', formData, {reportProgress: true, observe: 'events'});
  }
}
