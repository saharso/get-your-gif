import React from 'react';
export interface ISearchHistory {
    searchQuery: string[];
    onHistoryItemSelect?: (string: string) => void;
}

const ButtonUiComponent: React.FunctionComponent<ISearchHistory> = ({searchQuery, onHistoryItemSelect})=>{
    return <section>
        {searchQuery.map((string, index) => (
            <button key={index} onClick={() => onHistoryItemSelect && onHistoryItemSelect(string)}>
                {string}
            </button>
        ))}
    </section>
}

export default ButtonUiComponent;