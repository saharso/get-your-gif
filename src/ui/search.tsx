import React, {useState, useEffect} from 'react';
import useDebounce from '../hooks/useDebounce';
export interface ISearchUi {
    onQueryUpdate: Function;
    defaultValue?: string;
}

const SearchUiComponent: React.FunctionComponent<ISearchUi> = ({onQueryUpdate, defaultValue}) => {
    const [value, setValue] = useState('');
    const debouncedResult = useDebounce(value);

    useEffect(()=>{
        onQueryUpdate(debouncedResult);
    },[debouncedResult]);

    function onKeyup(e: any){
        setValue(e.target.value);
    }
    return <>
        
        <input className="ui-search"
            onKeyUp={onKeyup}
            defaultValue={defaultValue}
        />
    </>
}

export default SearchUiComponent;


  