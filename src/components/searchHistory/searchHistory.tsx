import React, { useState, useEffect } from 'react';

export interface ISearchHistory {
    searchQuery: string;
}
const searchHistory: Set<string> = new Set();

const SearchHistoryComponent: React.FunctionComponent<ISearchHistory> = ({searchQuery})=>{
    
    return <section>
        {Array.from(searchHistory).map((string, index) => (
            <button key={index}>
                {string}
            </button>
        ))}
    </section>
}

export default SearchHistoryComponent;