import { Book } from './book';

export class Favourite {
  Id!: string;
  Name!: string;
  FavItem?: FavouriteItem[];
}

export class FavouriteItem {
  Book!: Book;
  Order!: number;
}
