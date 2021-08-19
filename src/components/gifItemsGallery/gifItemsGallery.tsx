import React, {useState, useContext, useEffect, Suspense} from 'react';
import GifItemSchema from '../../models/gifItemSchema';
import Loader from '../../ui/loader';

const GifItemComponent = React.lazy(()=>import('../gifItem/gifItem'));
export interface IFavoriteUpdates {
    item: GifItemSchema;
    isFavorite: boolean
}
interface ISearchResults {
    results: GifItemSchema[];
    onFavoriteItemsUpdated?: (favoriteUpdates: IFavoriteUpdates) => void;
}


const GifItemsGalleryComponent: React.FunctionComponent<ISearchResults> = ({results, onFavoriteItemsUpdated}) => {
    return <article className="app-search-results">
        {results.length === 0 && <h2>No results found</h2>}
        {
            results.map(item => <Suspense key={item.id} fallback={<Loader/>}>
                <GifItemComponent 
                    details={item}
                    onFavoritesUpdate={(isFavorite: boolean, item: GifItemSchema )=>{
                        onFavoriteItemsUpdated && onFavoriteItemsUpdated({item, isFavorite})
                    }}
                />
            </Suspense>)
        }
    </article>;
}

export default GifItemsGalleryComponent;