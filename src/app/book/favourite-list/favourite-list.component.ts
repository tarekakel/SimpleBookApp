import { Component, OnInit } from '@angular/core';
import { Favourite, FavouriteItem } from 'src/app/models/favourite';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/State/app.state';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {
  favourites: Favourite[] = [];
  favouriteItem: FavouriteItem[] = [];
  newFavourite: Favourite = new Favourite();
  display = false;
  constructor(private store: Store<AppState>) {
    this.store
      .select(state => state.favourite)
      .subscribe(data => (this.favourites = data));
  }

  ngOnInit() {}
  openNew() {
    this.display = true;
  }
  saveFavourite() {
    this.store.dispatch({
      type: 'ADD_FAVOURITE',
      payload: <Favourite>{
        Id:
          '_' +
          Math.random()
            .toString(36)
            .substring(2, 10),

        Name: this.newFavourite.Name,
        FavItem: this.favouriteItem
      }
    });
    this.display = false;
    this.newFavourite = new Favourite();
  }
  cancel() {
    this.display = false;
  }
  ClearFavourite(fav: any) {
    this.store.dispatch({
      type: 'REMOVE_FAVOURITE',
      payload: fav
    });
    console.log(this.favourites);
  }
}
