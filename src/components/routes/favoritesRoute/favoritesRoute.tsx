import {useState, useContext, useEffect} from 'react';
import SearchResultComponent from '../../searchResults/searchResults';
import {AppContext} from '../../../models/appContext';
import arrayFromMap from '../../../tools/arrayFromMap';

export default function FavoriteRouterComponent(){
    const { state, dispatch } = useContext(AppContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(arrayFromMap(state.favoritesMap));
        console.log(state.favoritesMap)
    }, [state]);

    return <>
        <SearchResultComponent results={data}/>
    </>;
}