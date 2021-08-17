import { useState, useEffect } from 'react';
import GifItemSchema, {rawDataType} from '../models/gifItemSchema';

function useFetchGifs(query: string, numberOfItems: number) {
    console.log(numberOfItems);
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);

    useEffect(() => {
        if(!query) return;
        const fetchData = async () => {
            setStatus('loading');
            try {
                const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=54YWDzpnKwpreX21oW4jevboPLRjbRF5&q=${query}&limit=${numberOfItems}`);
                const data = await response.json();
                const parsedData = data.data.map((e: rawDataType) => new GifItemSchema(e))
                setData(parsedData);
                setStatus('success');
            } catch(error) {
                setData([]);
                setStatus('error');
            }
        };

        fetchData();
    }, [query, numberOfItems]);

    return { status, data };
};

export default useFetchGifs;