import React, { useState, useContext, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Input from '../../../ui/input/input';
import {AppContext} from '../../../models/appContext';
import useFetchGifs from '../../../hooks/useFetchGifs';
import useItemsNoByScreenSize from '../../../hooks/useItemsNoByScreenSize';
import GifItemsGalleryComponent, {IFavoriteUpdates} from '../../gifItemsGallery/gifItemsGallery';
import Loader from '../../../ui/loader/loader';
import SearchHistoryComponent from '../../searchHistory/searchHistory';
import IPojo from '../../../ts/pojo.interface';
import RoutesController from '../routesController';
import Notification from '../../../ui/notification/notification';

export default function SearchRouteComponent(){
    const { state, dispatch } = useContext(AppContext);
    const {itemsNoByScreenSize} = useItemsNoByScreenSize();
    const [query, setQuery] = useState(state.searchQuery || '');
    const [searchHistory, setSearchHistory] = useState(state.searchHistory);
    const [favoriteUpdate, setFavoriteUpdate] = useState<IFavoriteUpdates>();
    const [numberOfItems, setNumberOfItems] = useState(itemsNoByScreenSize);
    const { status, data } = useFetchGifs(query, numberOfItems);

    const displaysByApiState: IPojo<React.ReactChild> = {
        'loading': <div style={{height: '100%', fontSize: '5em'}} className="layout-alignXY"><Loader/></div>,
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
        RoutesController(dispatch).queryDispatches(query);
        RoutesController(dispatch).favoriteDispatches(favoriteUpdate);
    },[itemsNoByScreenSize, query, favoriteUpdate]);

    useEffect(()=>{
        setSearchHistory(state.searchHistory)
    }, [state.searchHistory]);

    return <article className="layout-gridHeaderMain">
        <header>
            { ReactDOM.createPortal(
                <Input 
                    defaultValue={query}
                    onQueryUpdate={(query)=> { setQuery(query); }}
                    onLoad={(inputElement) => inputElement.focus()}
                    placeholder="Search for gifs"
                /> 

                , document.getElementById('portal-element') as HTMLElement
            ) }
            <SearchHistoryComponent 
                searchHistory={searchHistory}
                searchQuery={query}
                onHistoryItemSelect={(selected)=>{setQuery(selected)}}    
            />

        </header>
        <main>
            {!query.trim() && !data.length && <Notification label="What are you waiting for? Start searching for some gifs!" />}
            {displaysByApiState[status] || null}
        </main>
    </article>;
}