import {useState, useContext, useEffect} from 'react';
import SearchUiComponent from '../../../ui/search';
import {AppContext} from '../../../models/appContext';
import useFetchGifs from '../../../hooks/useFetchGifs';
import useItemsNoByScreenSize from '../../../hooks/useItemsNoByScreenSize';
import GifItemsGalleryComponent, {IFavoriteUpdates} from '../../gifItemsGallery/gifItemsGallery';
import Loader from '../../../ui/loader';
import ActionsEnum from '../../../models/actions.enum';
import SearchHistoryComponent from '../../searchHistory/searchHistory';
import IPojo from '../../../models/pojo';

export default function SearchRouteComponent(){
    const { state, dispatch } = useContext(AppContext);
    const {itemsNoByScreenSize} = useItemsNoByScreenSize();
    const [query, setQuery] = useState(state.searchQuery);
    const [favoriteUpdate, setFavoriteUpdate] = useState<IFavoriteUpdates>({isFavorite: false, itemId: ''});
    const [numberOfItems, setNumberOfItems] = useState(itemsNoByScreenSize);
    const { status, data } = useFetchGifs(query, numberOfItems);

    const displays: IPojo = {
        'loading': <Loader/>,
        'success': <GifItemsGalleryComponent 
            results={data} 
            onFavoriteItemsUpdated={(favoriteUpdate: IFavoriteUpdates)=>{
                setFavoriteUpdate(favoriteUpdate);
            }}
        />,
        'error': <h2>Something went horribly wrong</h2>,
    }

    useEffect(()=>{
        setNumberOfItems(itemsNoByScreenSize);
        dispatch({type: ActionsEnum.SEARCH_QUERY, payload: query});
        favoriteUpdate.isFavorite ? 
            dispatch({type: ActionsEnum.ADD_TO_FAVORITES, payload: favoriteUpdate}) :
            dispatch({type: ActionsEnum.REMOVE_FROM_FAVORITES, payload: favoriteUpdate});
    },[itemsNoByScreenSize, query, favoriteUpdate]);

    return <article>
        <header>
            <div className="t-row">
                <SearchUiComponent 
                    defaultValue={state.searchQuery}
                    onQueryUpdate={(query)=> {setQuery(query); console.log(query)}}
                /> 
            </div>
            
            <SearchHistoryComponent searchQuery={query}/>
        </header>
        <main>
            {!query.trim() && <h2>What are you waiting for? Start searching for some gifs!</h2>}
            {displays[status] || null}
        </main>
    </article>;
}