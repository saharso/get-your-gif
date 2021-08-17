import GifItemSchema from "./gifItemSchema";

export default class StateModel {
    searchQuery: string = '';
    favoritesMap: Map<string, GifItemSchema> = new Map();
}