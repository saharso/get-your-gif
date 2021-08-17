import {useState, useContext, useEffect} from 'react';
import GifItemSchema from '../../models/gifItemSchema';

export interface ISearchResults {
    results: GifItemSchema[];
}
const SearchResultComponent: React.FunctionComponent<ISearchResults> = ({results}) => {


    return <article className="app-search-results">
        {results.length}
    </article>;
}

export default SearchResultComponent;