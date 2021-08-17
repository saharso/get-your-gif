import {useState, useContext, useEffect} from 'react';
import SearchUiComponent from '../../../ui/search.ui';
import {AppContext} from '../../../models/appContext';
import useFetchGifs from '../../../hooks/useFetchGifs';
import useItemsNoByScreenSize from '../../../hooks/useItemsNoByScreenSize';

export default function SearchRouteComponent(){
    const {itemsNoByScreenSize} = useItemsNoByScreenSize();
    const [query, setQuery] = useState('');
    const [numberOfItems, setNumberOfItems] = useState(itemsNoByScreenSize);
    const { state, dispatch } = useContext(AppContext);
    const { status, data } = useFetchGifs(query, numberOfItems);
    
    console.log(status, data, numberOfItems);

    useEffect(()=>{
        setNumberOfItems(itemsNoByScreenSize);
    },[itemsNoByScreenSize]);

    function onQueryUpdate(query: string){
        setQuery(query);
        dispatch({type: 'searchQuery', payload: query});
    }

    return <>
        <SearchUiComponent 
            defaultValue={state.searchQuery}
            onQueryUpdate={onQueryUpdate}
        /> {state.searchQuery}
    </>;
}