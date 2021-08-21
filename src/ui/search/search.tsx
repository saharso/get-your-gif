import './search.scss';
import React, {useState, useEffect, useRef} from 'react';
import useDebounce from '../../hooks/useDebounce';
export interface ISearchUi {
    onQueryUpdate: (debouncedResult: string) => void;
    onLoad?: (input: HTMLInputElement) => void;
    defaultValue?: string;
}

const Input: React.FunctionComponent<ISearchUi> = ({onQueryUpdate, defaultValue, onLoad}) => {
    const [value, setValue] = useState(defaultValue);
    const inputRef = useRef<HTMLInputElement>(null);
    const [preventInitial, setPreventInitial] = useState(false);
    const debouncedResult = useDebounce(value || '');

    useEffect(()=>{
        preventInitial && onQueryUpdate(debouncedResult);
        setPreventInitial(true);
        onLoad && onLoad(inputRef.current as HTMLInputElement);
    },[debouncedResult]);


    return <>
        {/* "key" is essential for default value to change on render */}
        <input className="ui-Input"
            onChange={(e: any) => {const target = e.target as HTMLInputElement; setValue(target.value)}}
            defaultValue={defaultValue}
            key={defaultValue}
            ref={inputRef}
        />
    </>
}

export default Input;


  