import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { HttpClient } from 'selenium-webdriver/http';

import {AccountService} from './_services/account.service';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptor, ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { ToursListComponent } from './tours/tours-list/tours-list.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { TourService } from './_services/tour.service';
import { TourBoxComponent } from './tours/tour-box/tour-box.component';
import { TourDeteilComponent } from './tours/tour-deteil/tour-deteil.component';
import { HotelService } from './_services/hotel.service';
import { HotelBoxComponent } from './hotels/hotel-box/hotel-box.component';
import { HotelDeteilComponent } from './hotels/hotel-deteil/hotel-deteil.component';
import { HotelsListComponent } from './hotels/hotels-list/hotels-list.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ToursListComponent,
      TourBoxComponent,
      TourDeteilComponent,
      HotelsListComponent,
      HotelBoxComponent,
      HotelDeteilComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AccountService,
      ErrorInterceptorProvider,
      AlertifyService,
      TourService,
      HotelService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
