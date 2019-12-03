import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToursListComponent } from './tours/tours-list/tours-list.component';
import {TourDeteilComponent} from './tours/tour-deteil/tour-deteil.component';
import {HotelsListComponent } from './hotels/hotels-list/hotels-list.component';
import {HotelDeteilComponent} from './hotels/hotel-deteil/hotel-deteil.component';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'tours', component: ToursListComponent},
    {path: 'tours/:id', component: TourDeteilComponent},
    {path: 'hotel', component: HotelsListComponent},
    {path: 'hotel/:id', component: HotelDeteilComponent}
   // {path: '**', redirectTo: 'home', pathMatch: 'full '}
];
