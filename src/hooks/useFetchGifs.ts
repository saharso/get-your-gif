import { useState, useEffect } from 'react';

function useFetchGifs(query: string) {
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);

    useEffect(() => {
        if(!query) return;
        const fetchData = async () => {
            setStatus('loading');
            try {
                const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=54YWDzpnKwpreX21oW4jevboPLRjbRF5&q=${query}&limit=2`);
                const data = await response.json();
                setData(data);
                setStatus('success');
            } catch(error) {
                setData([]);
                setStatus('error');
            }
        };

        fetchData();
    }, [query]);

    return { status, data };
};

export default useFetchGifs;