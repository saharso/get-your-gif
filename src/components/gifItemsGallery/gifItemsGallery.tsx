import React, {useState, useContext, useEffect, Suspense} from 'react';
import GifItemSchema from '../../models/gifItemSchema';
import Loader from '../../ui/loader';
const GifItemComponent = React.lazy(()=>import('../gifItem/gifItem'));
export interface ISearchResults {
    results: GifItemSchema[];
}
const GifItemsGalleryComponent: React.FunctionComponent<ISearchResults> = ({results}) => {
    return <article className="app-search-results">
        {results.length === 0 && <h2>No results found</h2>}
        {
            results.map(item => <Suspense key={item.id} fallback={<Loader/>}><GifItemComponent details={item}/></Suspense>)
        }
    </article>;
}

export default GifItemsGalleryComponent;