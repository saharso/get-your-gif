import React, {useState} from 'react';
import Button from '../../ui/button/button';
import WordBox from '../../ui/wordBox/wordBox';
export interface ISearchHistory {
    searchHistory: string[];
    searchQuery: string;
    onHistoryItemSelect?: (string: string) => void;
}

const SearchHistoryComponent: React.FunctionComponent<ISearchHistory> = ({searchHistory, searchQuery, onHistoryItemSelect})=>{
    return <section className="space-paddingX space-row">
        <WordBox>
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
        </WordBox>
    </section>
}

export default SearchHistoryComponent;