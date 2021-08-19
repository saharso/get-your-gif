import React, {useState, useEffect} from 'react';
import useDebounce from '../hooks/useDebounce';
export interface ISearchUi {
    onQueryUpdate: (debouncedResult: string) => void;
    defaultValue?: string;
}

const SearchUiComponent: React.FunctionComponent<ISearchUi> = ({onQueryUpdate, defaultValue}) => {
    const [value, setValue] = useState('');
    const [preventInitial, setPreventInitial] = useState(false);
    const debouncedResult = useDebounce(value);

    useEffect(()=>{
        preventInitial && onQueryUpdate(debouncedResult);
        setPreventInitial(true);
    },[debouncedResult]);


    return <>
        
        <input className="ui-search"
            onKeyUp={(e: any) => {const target = e.target as HTMLInputElement; setValue(target.value)}}
            defaultValue={defaultValue}
        />
    </>
}

export default SearchUiComponent;


  