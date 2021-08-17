import { useState, useEffect } from 'react';
import screenWidth from '../ts/screenWidth.type';
import ItemsPerScreenSize from '../models/itemsPerScreenSize';

function parseScreenSize(): number {
    let size: screenWidth;
    if(window.innerWidth < 500) {
        size = 'mobile'
    } else if (window.innerWidth < 800) {
        size = 'tablet';
    } else {
        size = 'desktop';
    }
    return ItemsPerScreenSize.calc(size);
}

function useItemsNoByScreenSize() {
    const [itemsNoByScreenSize, setItemsNoByScreenSize] = useState(parseScreenSize());
    useEffect(() => {
        window.addEventListener('resize', () => {
            setItemsNoByScreenSize(parseScreenSize())
        })
    }, []);

    return {itemsNoByScreenSize};
};

export default useItemsNoByScreenSize;