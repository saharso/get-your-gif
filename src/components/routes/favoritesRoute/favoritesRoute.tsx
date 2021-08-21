import {useState, useContext, useEffect} from 'react';
import GifItemsGalleryComponent from '../../gifItemsGallery/gifItemsGallery';
import {AppContext} from '../../../models/appContext';
import arrayFromMap from '../../../actions/arrayFromMap';

export default function FavoriteRouterComponent(){
    const { state, dispatch } = useContext(AppContext);
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
        setData(arrayFromMap(state.favoritesMap));
    }, [state]);

    return <>
        <h2>Favorites</h2>
        <GifItemsGalleryComponent results={data}/>
    </>;
}