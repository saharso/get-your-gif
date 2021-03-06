import GifItemSchema from '../models/gifItemSchema';
import { StateModel } from '../models/store';
import IAction from '../ts/actions.interface';
import arrayFromMap from './arrayFromMap';

function updateLocalStorage(state: StateModel){
    localStorage.setItem('favorites', JSON.stringify(arrayFromMap(state.favoritesMap)));
}
export function getFavoritesFromLocalStorage(){
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if(!Array.isArray(favorites)) return new Map();
    const map = new Map();
    favorites.forEach((e: GifItemSchema) => map.set(e.id, e));
    return map;
} 
export default function favorites(state: StateModel, action: IAction){
    let clonedState: StateModel;
   
    function add (){
        clonedState = {...state};
        clonedState.favoritesMap.set(action.payload.id, action.payload);
        action.payload.isFavorite = true;
        updateLocalStorage(clonedState);
        return clonedState;
    }
    function remove(){
        clonedState = {...state};
        clonedState.favoritesMap.delete(action.payload.id);
        action.payload.isFavorite = false;
        updateLocalStorage(clonedState);
        return clonedState;;
    }
    return {
        add, remove, getFavoritesFromLocalStorage,
    }
}