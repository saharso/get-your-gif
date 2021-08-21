import {getFavoritesFromLocalStorage} from "../actions/favorites";
import GifItemSchema from "./gifItemSchema";

export interface StateModel {
    searchQuery: string;
    readonly favoritesMap: Map<string, GifItemSchema>,
    readonly searchHistory: Array<string>,
}
const store: StateModel = {
    searchQuery: '',
    favoritesMap: new Map(getFavoritesFromLocalStorage()),
    searchHistory: [],
}
export default store;