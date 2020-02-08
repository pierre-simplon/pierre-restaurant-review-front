import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantReviewListComponent } from './restaurant-review-list/restaurant-review-list.component';
import { DataService } from './data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule, ReactiveFormsModule],
  declarations: [ AppComponent, RestaurantListComponent, RestaurantReviewListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
