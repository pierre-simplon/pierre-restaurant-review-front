import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getRestaurantList() {
    return this.httpClient.get('https://pierre-restaurant-api.herokuapp.com/api/restaurants')
  }

  getFilteredRestaurantList(lowest, highest) {
    let params = new HttpParams();
    params = params.append('lowestNote', lowest);
    params = params.append('highestNote', highest);

    const options = { params: params };

    return this.httpClient.get('https://pierre-restaurant-api.herokuapp.com/api/restaurants/filter', options)
  }

  addReviewToRestaurant(restaurantId, review) {
    return this.httpClient.post('https://pierre-restaurant-api.herokuapp.com/api/restaurants/' + restaurantId + '/reviews', review);
  }

  deleteReviewFromRestaurant(restaurantId, reviewId) {
    return this.httpClient.delete('https://pierre-restaurant-api.herokuapp.com/api/restaurants/' + restaurantId + '/reviews/' + reviewId);
  }
}