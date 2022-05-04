import { Book } from '../models/book';

export const CHANGE_FAVOURITE = 'CHANGE_FAVOURITE';

const Init_State: Book[] = [
  {
    Id: 1,
    BookTitle: 'Dune',
    Year: 1965,
    AuthorName: 'Frank Herbert',
    IsFavorite: false
  },
  {
    Id: 2,
    BookTitle: "Ender's Game",
    Year: 1985,
    AuthorName: 'Orson Scott Card',
    IsFavorite: false
  },
  {
    Id: 3,
    BookTitle: '1984',
    Year: 1949,
    AuthorName: 'George Orwell',
    IsFavorite: false
  },
  {
    Id: 4,
    BookTitle: 'Fahrenheit 451',
    Year: 1953,
    AuthorName: 'Ray Bradbury',
    IsFavorite: false
  },
  {
    Id: 5,
    BookTitle: 'Brave New World',
    Year: 1932,
    AuthorName: 'Aldous Huxley',
    IsFavorite: false
  }
];
export function bookReducer(state: Book[] = Init_State, action: any) {
  switch (action.type) {
    case CHANGE_FAVOURITE:
      return updateFavourites(state, action.payload);

    default:
      return state;
  }
}

function updateFavourites(state: Book[], payload: Book) {
  let newArray = [...state];
  let oldData = newArray.find(x => x.Id == payload.Id)!;
  let index = newArray.indexOf(oldData);
  newArray[index] = payload;
  return [...newArray];
}
