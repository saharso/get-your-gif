import {useState, useContext, useEffect} from 'react';
import SearchUiComponent from '../../../ui/search';
import {AppContext} from '../../../models/appContext';
import useFetchGifs from '../../../hooks/useFetchGifs';
import useItemsNoByScreenSize from '../../../hooks/useItemsNoByScreenSize';
import SearchResultComponent from '../../searchResults/searchResults';
import Loader from '../../../ui/loader';

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
    function whatToDisplay(){
        if(query.trim() === '') return <h2>What are you waiting for? Start searching for some gifs!</h2>
        switch(status) {
            case 'loading' : return <Loader/>;
            case 'success' : return <SearchResultComponent results={data}/>;
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
        
    </>;
}