import store from "./store";

export type rawDataType = {
    id: string;
    title: string;
    images: {
        original: {
            url: string;
        }
    }
}

export default class GifItemSchema {
    title: string; 
    id: string;
    isFavorite: boolean;
    imageUrl: string;
    constructor(raw: rawDataType){
        this.title = raw.title;
        this.id = raw.id;
        this.imageUrl = raw.images.original.url;
        this.isFavorite = !!store.favoritesMap.has(this.id);
    }
}