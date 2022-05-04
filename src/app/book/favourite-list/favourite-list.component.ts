import { Component, OnInit } from '@angular/core';
import { Favourite, FavouriteItem } from 'src/app/models/favourite';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/State/app.state';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent {
  favourites: Favourite[] = [];
  books: Book[] = [];
  favouriteItem: FavouriteItem[] = [];
  newFavourite: Favourite = new Favourite();
  selectedFavourite: Favourite = new Favourite();
  bookOrder: number[] = [];
  display = false;
  bookDialoge = false;
  constructor(private store: Store<AppState>) {
    this.store
      .select(state => state.favourite)
      .subscribe(data => (this.favourites = data));
    this.store
      .select(state => state.books)
      .subscribe(data => (this.books = data));
  }
  selectedBooks: Book[] = [];
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
  }
  AddBookToFavourite(fav: Favourite) {
    this.bookDialoge = true;
    this.selectedFavourite = fav;
  }
  checkChange(w: Book) {
    var index = this.selectedBooks.indexOf(w);
    if (index == -1) {
      this.selectedBooks.push(w);
    } else {
      this.selectedBooks.slice(index, 1);
    }
  }
  AddbooksToFavorite() {
    let items: any[] = [];
    let i = 0;
    this.selectedBooks.forEach(element => {
      let order = this.bookOrder.filter(w => w != null)[i];
      items.push({ element, order });
      i++;
    });
    let oldDate = { ...this.selectedFavourite };
    oldDate.FavItem = items;
    this.store.dispatch({
      type: 'ADD_BOOK_TO_FAVOURITE',
      payload: [oldDate]
    });
  }
}
