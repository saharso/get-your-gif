import {getFavoritesFromLocalStorage} from "../actions/favorites";
import GifItemSchema from "./gifItemSchema";

export class StateModel {
    searchQuery: string = '';
    readonly favoritesMap: Map<string, GifItemSchema> = new Map(getFavoritesFromLocalStorage());
    readonly searchHistory: Array<string> = [];
}
const store = new StateModel();
export default store;