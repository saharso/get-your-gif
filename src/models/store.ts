import GifItemSchema from "./gifItemSchema";
function getFavoritesFromLocalStorage(){
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if(!Array.isArray(favorites)) return new Map();
    const map = new Map();
    favorites.forEach((e: GifItemSchema) => map.set(e.id, e));
    console.log(map);
    return map;
}
getFavoritesFromLocalStorage();
export class StateModel {
    searchQuery: string = '';
    readonly favoritesMap: Map<string, GifItemSchema> = new Map(getFavoritesFromLocalStorage());
    readonly searchHistory: Array<string> = [];
}
const store = new StateModel();
export default store;