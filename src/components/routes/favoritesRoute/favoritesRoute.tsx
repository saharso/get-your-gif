import {useState, useContext, useEffect} from 'react';
import GifItemsGalleryComponent, { IFavoriteUpdates } from '../../gifItemsGallery/gifItemsGallery';
import {AppContext} from '../../../models/appContext';
import arrayFromMap from '../../../actions/arrayFromMap';
import RoutesController from '../routesController';

export default function FavoriteRouterComponent(){
    const { state, dispatch } = useContext(AppContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(arrayFromMap(state.favoritesMap));
    }, [state]);

    return <>
        <h2>Favorites</h2>
        <GifItemsGalleryComponent 
            results={data}
            onFavoriteItemsUpdated={(favoriteUpdate: IFavoriteUpdates)=>{
                RoutesController(dispatch).favoriteDispatches(favoriteUpdate);
            }}            
        />
    </>;
}