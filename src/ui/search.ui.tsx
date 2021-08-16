import React, {useState} from 'react';

function debounce(waitMs = 500){
    let timeout: ReturnType<typeof setTimeout>;
    let allow: boolean = false;
    const setCallback = function (callback: Function) {
      clearTimeout(timeout);
      timeout = setTimeout(()=>{
        callback();
        allow = true;
      }, waitMs);
      if(allow === true) {
        callback();
        allow = false;
      }
    }  
    return {setCallback}
}

const SearchUiComponent: React.FunctionComponent = () => {
    const deb = debounce();
    const [searchQuery, setSearchQuery] = useState('');
    function onKeyup(e: any){
        deb.setCallback(() => {
            setSearchQuery(e.target.value)
        });
    }
    return <>
        
        <input className="ui-search"
            onKeyUp={onKeyup}
        />
        {searchQuery}
    </>
}

export default SearchUiComponent;


  