import GifItemSchema from "./gifItemSchema";

export class StateModel {
    searchQuery: string = '';
    readonly favoritesMap: Map<string, GifItemSchema> = new Map();
}
const store = new StateModel();
export default store;