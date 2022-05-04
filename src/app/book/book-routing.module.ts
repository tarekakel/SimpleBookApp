import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'favourite', component: FavouriteListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {}
