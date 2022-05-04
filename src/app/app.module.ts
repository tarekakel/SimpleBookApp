import { HttpClientModule } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionReducerMap, Store, StoreModule } from '@ngrx/store';
import { addFavouriteReducer } from './reducers/favourite.reducer';
import { bookReducer } from './reducers/book.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ favourite: addFavouriteReducer, books: bookReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
