import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from 'src/app/models/book';
import { Favourite } from 'src/app/models/favourite';
import { BookService } from 'src/app/services/book.service';
import { AppState } from 'src/app/State/app.state';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book[] = [];
  favourites: Favourite[] = [];
  selectedBook?: Book;
  selectedFav = new Favourite();
  val = 0;
  display = false;
  constructor(private store: Store<AppState>) {
    this.store
      .select(state => state.books)
      .subscribe(data => {
        this.books = data;
      });
  }

  displayDialoge(book: Book) {
    this.selectedBook = book;
    this.display = true;
    this.store
      .select(state => state.favourite)
      .subscribe(data => {
        this.favourites = data;
      });
  }
  saveDialoge() {
    let oldData = { ...this.selectedFav };
    let oldBook = { ...this.selectedBook };
    oldBook.IsFavorite = !oldBook.IsFavorite;
    let items = [
      ...this.selectedFav.FavItem!,
      {
        Book: this.selectedBook!,
        Order: this.val
      }
    ];
    oldData.FavItem = items;
    if (!this.selectedBook) {
      this.store.dispatch({
        type: 'ADD_BOOK_TO_FAVOURITE',
        payload: oldData
      });
    }

    this.store.dispatch({
      type: 'CHANGE_FAVOURITE',
      payload: oldBook
    });

    this.display = false;
  }
  removeFromFavourite(book: Book) {
    let oldBook = { ...book };
    oldBook.IsFavorite = !oldBook.IsFavorite;
    this.store.dispatch({
      type: 'CHANGE_FAVOURITE',
      payload: oldBook
    });
  }
}
