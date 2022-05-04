import { Injectable } from '@angular/core';
import { Favourite } from '../models/favourite';

@Injectable()
export class FavouriteService {
  favourites: Favourite[] = [];
  constructor() {}

  addToFavourite(favourite: Favourite) {
    this.favourites.push(favourite);
  }

  getAllFavourites() {
    return this.favourites;
  }
}
