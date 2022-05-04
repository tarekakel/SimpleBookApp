import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';

import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { BookListComponent } from './book-list/book-list.component';
import { InputTextModule } from 'primeng/inputtext';
import { BookService } from '../services/book.service';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { ToolbarModule } from 'primeng/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavouriteService } from '../services/favourite.service';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [BookListComponent, FavouriteListComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    TableModule,
    ToastModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    InputNumberModule
  ],
  providers: [BookService, FavouriteService]
})
export class BookModule {}
