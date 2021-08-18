import {useState, useContext, useEffect} from 'react';
import SearchUiComponent from '../../../ui/search';
import {AppContext} from '../../../models/appContext';
import useFetchGifs from '../../../hooks/useFetchGifs';
import useItemsNoByScreenSize from '../../../hooks/useItemsNoByScreenSize';
import GifItemsGalleryComponent from '../../gifItemsGallery/gifItemsGallery';
import Loader from '../../../ui/loader';
import ActionsEnum from '../../../models/actions.enum';

export default function SearchRouteComponent(){
    const { state, dispatch } = useContext(AppContext);
    const {itemsNoByScreenSize} = useItemsNoByScreenSize();
    const [query, setQuery] = useState(state.searchQuery);
    const [numberOfItems, setNumberOfItems] = useState(itemsNoByScreenSize);
    const { status, data } = useFetchGifs(query, numberOfItems);

    useEffect(()=>{
        setNumberOfItems(itemsNoByScreenSize);
    },[itemsNoByScreenSize]);

    function onQueryUpdate(query: string){
        setQuery(query);
        dispatch({type: ActionsEnum.SEARCH_QUERY, payload: query});
    }
    function whatToDisplay(){
        if(query.trim() === '') return <h2>What are you waiting for? Start searching for some gifs!</h2>
        switch(status) {
            case 'loading' : return <Loader/>;
            case 'success' : return <GifItemsGalleryComponent results={data}/>;
            case 'error' : return <h2>Something went horribly wrong</h2>;
        }
    }
    return <>
        <SearchUiComponent 
            defaultValue={state.searchQuery}
            onQueryUpdate={onQueryUpdate}
        /> {state.searchQuery}
        {
            whatToDisplay()
        }
        {state.favoritesMap.size}
    </>;
}