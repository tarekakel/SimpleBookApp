import { Book } from '../models/book';
import { Favourite } from '../models/favourite';

export interface AppState {
  readonly favourite: Favourite[];
  readonly books: Book[];
}
