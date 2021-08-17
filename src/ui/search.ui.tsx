import React from 'react';

export interface ISearchUi {
    onQueryUpdate?: Function;
    defaultValue?: string;
}

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

const SearchUiComponent: React.FunctionComponent<ISearchUi> = ({onQueryUpdate, defaultValue}) => {
    const deb = debounce(200);
    function onKeyup(e: any){
        deb.setCallback(() => {
            onQueryUpdate && onQueryUpdate(e.target.value);
        });
    }
    return <>
        
        <input className="ui-search"
            onKeyUp={onKeyup}
            defaultValue={defaultValue}
        />
    </>
}

export default SearchUiComponent;


  