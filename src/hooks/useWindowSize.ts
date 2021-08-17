import { useState, useEffect } from 'react';
import screenWidth from '../ts/screenWidth.type';

function parseScreenSize(): screenWidth {
    let size: screenWidth;
    if(window.innerWidth < 500) {
        size = 'mobile'
    } else if (window.innerWidth < 1024) {
        size = 'tablet';
    } else {
        size = 'desktop';
    }
    return size;
}

function useWindowSize() {
    const [screenWidth, setScreenWidth] = useState(parseScreenSize());
    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenWidth(parseScreenSize())
        })
    }, []);

    return {screenWidth};
};

export default useWindowSize;