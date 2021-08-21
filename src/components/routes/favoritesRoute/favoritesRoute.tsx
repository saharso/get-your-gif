import {useState, useContext, useEffect} from 'react';
import GifItemsGalleryComponent, { IFavoriteUpdates } from '../../gifItemsGallery/gifItemsGallery';
import {AppContext} from '../../../models/appContext';
import arrayFromMap from '../../../actions/arrayFromMap';
import RoutesController from '../routesController';

export default function FavoriteRouterComponent(){
    const { state, dispatch } = useContext(AppContext);
    const [data, setData] = useState([]);
    const [favoriteUpdate, setFavoriteUpdate] = useState<IFavoriteUpdates>();

    useEffect(() => {
        setData(arrayFromMap(state.favoritesMap));
        RoutesController(dispatch).favoriteDispatches(favoriteUpdate);
    }, [state, favoriteUpdate]);

    return <>
        <h2>Favorites</h2>
        <GifItemsGalleryComponent 
            results={data}
            onFavoriteItemsUpdated={(favoriteUpdate: IFavoriteUpdates)=>{
                setFavoriteUpdate(favoriteUpdate);
            }}            
        />
    </>;
}