import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HotelService } from '../_services/hotel.service';
import { Hotel } from '../_models/hotel';

@Injectable()
export class HotelListResolver implements Resolve<Hotel[]> {
    pageNumber = 1;
    pageSize = 2;

    constructor(private hotelService: HotelService, private router: Router,
        private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Hotel[]> {
        return this.hotelService.getHotels(this.pageNumber, this.pageSize).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}
