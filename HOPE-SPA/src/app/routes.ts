import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToursListComponent } from './tours/tours-list/tours-list.component';
import {TourDeteilComponent} from './tours/tour-deteil/tour-deteil.component';
import {HotelsListComponent } from './hotels/hotels-list/hotels-list.component';
import {HotelDeteilComponent} from './hotels/hotel-deteil/hotel-deteil.component';
import { HotelDetailResolver } from './_resolvers/hotel-detail.resolver';
import { AuthGuard } from 'src/app/_guards/auth.guard';
import { HotelListResolver } from './_resolvers/hotel-list.resolver';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {
        path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
    {path: 'tours', component: ToursListComponent},
    {path: 'tours/:id', component: TourDeteilComponent},
    {path: 'hotel', component: HotelsListComponent, resolve: {hotel: HotelListResolver}},
    {path: 'hotel/:id', component: HotelDeteilComponent, resolve: {hotel: HotelDetailResolver}},
     ],
    },
   {path: '**', redirectTo: 'home', pathMatch: 'prefix'}
];
