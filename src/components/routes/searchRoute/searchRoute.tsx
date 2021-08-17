import {useState, useContext, useEffect} from 'react';
import SearchUiComponent from '../../../ui/search.ui';
import {AppContext} from '../../../models/appContext';
import useFetchGifs from '../../../hooks/useFetchGifs';
import useWindowSize from '../../../hooks/useWindowSize'

export default function SearchRouteComponent(){
    const [query, setQuery] = useState('');
    const { state, dispatch } = useContext(AppContext);
    const { status, data } = useFetchGifs(query);
    const {screenWidth} = useWindowSize();
    console.log(screenWidth);
    console.log(status, data);
    useEffect(()=>{

    },[screenWidth])
    function onQueryUpdate(query: string){
        setQuery(query);
        dispatch({type: 'searchQuery', payload: query});
        console.log(state);
    }
    return <>
        <SearchUiComponent 
            defaultValue={state.searchQuery}
            onQueryUpdate={onQueryUpdate}
        /> {state.searchQuery}
    </>;
}