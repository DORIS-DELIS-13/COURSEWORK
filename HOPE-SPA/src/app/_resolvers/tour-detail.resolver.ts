import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertifyService } from '../_services/alertify.service';
import { Tour } from '../_models/tour';
import { TourService } from '../_services/tour.service';

@Injectable()
export class TourDetailResolver implements Resolve<Tour> {
    constructor(private tourService: TourService, private router: Router, private alerify: AlertifyService) { }
    resolve(route: ActivatedRouteSnapshot):  Observable<Tour> {
      return this.tourService.getTour(route.params['id']).pipe(
        catchError(error => {
          this.alerify.error('Проблемы с получением данных');
          this.router.navigate(['/tours']);
          return of(null);
        })
      );
        // Когда мы используем resolver мы выходим из posterService ->
        // получаем poster, который совпадает c route parametr(там наша id), который мы стремимся получить ->
        // все остально это ловим ошибки
    }
}
