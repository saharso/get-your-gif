import { useState, useEffect } from 'react';
import screenWidth from '../ts/screenWidth.type';
import itemsPerScreenWidth from '../models/itemsPerScreenWidth';
import Screens from '../models/screens';

function getItemsNoByScreenWidth(): number {
    let screenWidth: screenWidth;
    if (window.innerWidth < Screens.mobile) {
        screenWidth = 'mobile'
    } else if (window.innerWidth < Screens.tablet) {
        screenWidth = 'tablet';
    } else {
        screenWidth = 'desktop';
    }
    
    return itemsPerScreenWidth.calc(screenWidth);
}

function useItemsNoByScreenSize() {
    const [itemsNoByScreenSize, setItemsNoByScreenSize] = useState(getItemsNoByScreenWidth());
    useEffect(() => {
        window.addEventListener('resize', () => {
            setItemsNoByScreenSize(getItemsNoByScreenWidth())
        });
    }, []);

    return {itemsNoByScreenSize};
}

export default useItemsNoByScreenSize;