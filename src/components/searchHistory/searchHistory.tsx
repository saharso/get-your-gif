import React from 'react';

export interface ISearchHistory {
    searchQuery: string;
}
const SearchHistoryComponent: React.FunctionComponent<ISearchHistory> = ({searchQuery})=>{
    return <>Hello {searchQuery}</>
}

export default SearchHistoryComponent;