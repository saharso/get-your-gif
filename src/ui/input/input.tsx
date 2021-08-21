import './input.scss';
import React, {useState, useEffect, useRef} from 'react';
import useDebounce from '../../hooks/useDebounce';
export interface IInputProps {
    onQueryUpdate: (debouncedResult: string) => void;
    onLoad?: (input: HTMLInputElement) => void;
    defaultValue?: string;
    placeholder?: string;
}

const Input: React.FunctionComponent<IInputProps> = ({onQueryUpdate, defaultValue, onLoad, placeholder}) => {
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
        <div className="ui-input">
            <input className="ui-input__field"
                onChange={(e: any) => {const target = e.target as HTMLInputElement; setValue(target.value)}}
                defaultValue={defaultValue}
                key={defaultValue}
                ref={inputRef}
                placeholder={placeholder}
            />
        </div>
    </>
}

export default Input;


  