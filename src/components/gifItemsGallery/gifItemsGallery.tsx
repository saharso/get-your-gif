import './gifItemsGallery.scss';
import React, {Suspense} from 'react';
import GifItemSchema from '../../models/gifItemSchema';
import Loader from '../../ui/loader/loader';
import Notification from '../../ui/notification/notification';
import classnames from 'classnames';

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
    return <article className={classnames('gyg-gifItemsGallery', {'is-empty': results.length === 0})}>
        {results.length === 0 && <Notification label="No results found" />}
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