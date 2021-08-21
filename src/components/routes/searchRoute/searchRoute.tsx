import React, {useState, useContext, useEffect} from 'react';
import Input from '../../../ui/search/search';
import {AppContext} from '../../../models/appContext';
import useFetchGifs from '../../../hooks/useFetchGifs';
import useItemsNoByScreenSize from '../../../hooks/useItemsNoByScreenSize';
import GifItemsGalleryComponent, {IFavoriteUpdates} from '../../gifItemsGallery/gifItemsGallery';
import Loader from '../../../ui/loader/loader';
import ActionsEnum from '../../../models/actions.enum';
import SearchHistoryComponent from '../../searchHistory/searchHistory';
import IPojo from '../../../ts/pojo.interface';

function queryDispatches(dispatch: Function, query: string) {
    dispatch({type: ActionsEnum.SEARCH_QUERY, payload: query});
    dispatch({type: ActionsEnum.UPDATE_HISTORY, payload: query});
}

function favoriteDispatches(dispatch: Function, favoriteUpdate?: IFavoriteUpdates) {
    if(!favoriteUpdate) return;
    favoriteUpdate && favoriteUpdate.isFavorite ? 
        dispatch({type: ActionsEnum.ADD_TO_FAVORITES, payload: favoriteUpdate.item}) :
        dispatch({type: ActionsEnum.REMOVE_FROM_FAVORITES, payload: favoriteUpdate?.item});
}

export default function SearchRouteComponent(){
    const { state, dispatch } = useContext(AppContext);
    const {itemsNoByScreenSize} = useItemsNoByScreenSize();
    const [query, setQuery] = useState(state.searchQuery || 'fun');
    const [searchHistory, setSearchHistory] = useState(state.searchHistory);
    const [favoriteUpdate, setFavoriteUpdate] = useState<IFavoriteUpdates>();
    const [numberOfItems, setNumberOfItems] = useState(itemsNoByScreenSize);
    const { status, data } = useFetchGifs(query, numberOfItems);

    const displaysByApiState: IPojo<React.ReactChild> = {
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
        queryDispatches(dispatch, query);
        favoriteDispatches(dispatch, favoriteUpdate);
    },[itemsNoByScreenSize, query, favoriteUpdate]);

    useEffect(()=>{
        setSearchHistory(state.searchHistory)
    }, [state.searchHistory]);

    return <article className="layout-gridHeaderMain">
        <header>
            <div className="space-paddingX space-row">
                <Input 
                    defaultValue={query}
                    onQueryUpdate={(query)=> { setQuery(query); }}
                    onLoad={(inputElement) => inputElement.focus()}
                /> 
            </div>
            <SearchHistoryComponent 
                searchHistory={searchHistory}
                searchQuery={query}
                onHistoryItemSelect={(selected)=>{setQuery(selected)}}    
            />
        </header>
        <main>
            {!query.trim() && !data.length && <h2>What are you waiting for? Start searching for some gifs!</h2>}
            {displaysByApiState[status] || null}
        </main>
    </article>;
}