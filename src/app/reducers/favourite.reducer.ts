import { Action } from '@ngrx/store';
import { Favourite } from '../models/favourite';

export const ADD_FAVOURITE = 'ADD_FAVOURITE';

export const ADD_BOOK_TO_FAVOURITE = 'ADD_BOOK_TO_FAVOURITE';

export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';

export function addFavouriteReducer(state: Favourite[] = [], action: any) {
  switch (action.type) {
    case ADD_FAVOURITE:
      return [...state, action.payload];

    case ADD_BOOK_TO_FAVOURITE:
      return updateFavourites(state, action.payload);

    case REMOVE_FAVOURITE:
      return removeFromFavourite(state, action.payload);
    default:
      return state;
  }
}

function updateFavourites(state: Favourite[], payload: Favourite) {
  let newArray = [...state];
  let oldData = newArray.find(x => x.Id == payload.Id)!;
  let index = newArray.indexOf(oldData);
  newArray[index] = payload;
  return [...newArray];
}

function removeFromFavourite(state: Favourite[], payload: Favourite) {
  let newArray = [...state];
  let oldData = newArray.find(x => x.Id == payload.Id)!;
  let index = newArray.indexOf(oldData);
  newArray.splice(index, 1);
  return [...newArray];
}
