import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable()
export class BookService {
  constructor(private httpClient: HttpClient) {}
  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('assets/books.json');
  }
}
