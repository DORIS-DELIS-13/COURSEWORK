import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { HotelService } from '../_services/hotel.service';
import { Hotel } from '../_models/hotel';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertifyService } from '../_services/alertify.service';

@Injectable()
export class HotelDetailResolver implements Resolve<Hotel> {
    constructor(private hotelService: HotelService, private router: Router, private alerify: AlertifyService) { }
    resolve(route: ActivatedRouteSnapshot):  Observable<Hotel> {
      return this.hotelService.getHotel(route.params['id']).pipe(
        catchError(error => {
          this.alerify.error('Проблемы с получением данных');
          this.router.navigate(['/posters']);
          return of(null);
        })
      );
        // Когда мы используем resolver мы выходим из posterService ->
        // получаем poster, который совпадает c route parametr(там наша id), который мы стремимся получить ->
        // все остально это ловим ошибки
    }
}
