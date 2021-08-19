import React, { useState, useEffect } from 'react';

export interface ISearchHistory {
    searchQuery: string[];
}

const SearchHistoryComponent: React.FunctionComponent<ISearchHistory> = ({searchQuery})=>{
    return <section>
        {searchQuery.map((string, index) => (
            <button key={index}>
                {string}
            </button>
        ))}
    </section>
}

export default SearchHistoryComponent;