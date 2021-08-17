import { useState, useEffect } from 'react';

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

const debouncer = debounce(500);

export default function useDebounce(str: string){
  const [value, setValue] = useState<string | null>(null);
  debouncer.setCallback(() => {
    setValue(str);
  });

  return value;
}