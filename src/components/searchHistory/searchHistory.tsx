import React, {useState} from 'react';
import Button from '../../ui/button/button';
export interface ISearchHistory {
    searchHistory: string[];
    searchQuery: string;
    onHistoryItemSelect?: (string: string) => void;
}

const SearchHistoryComponent: React.FunctionComponent<ISearchHistory> = ({searchHistory, searchQuery, onHistoryItemSelect})=>{
    return <section>
        {searchHistory.map((value, index) => (
            <Button 
                key={index}
                label={value}
                onClick={() => {
                    onHistoryItemSelect && onHistoryItemSelect(value);
                }}
                isActive={value === searchQuery}
            />
        ))}
    </section>
}

export default SearchHistoryComponent;