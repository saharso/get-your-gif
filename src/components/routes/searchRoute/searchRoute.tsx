import {useState, useContext} from 'react';
import SearchUiComponent from '../../../ui/search.ui';
import {AppContext} from '../../../models/appContext';

export default function SearchRouteComponent(){
    const [query, setQuery] = useState('');
    const { state, dispatch } = useContext(AppContext);
    
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