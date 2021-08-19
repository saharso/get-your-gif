import {useState} from 'react';
import GifItemSchema from '../../models/gifItemSchema';

export interface IGifItem {
    details: GifItemSchema;
    onFavoritesUpdate?: (isFavorite: boolean, itemId: string) => void;
}

function toggleFavoriteText(condition: boolean){
    return condition ? 'Remove from favorites' : 'Add to favorites'
}

const GifItemComponent: React.FunctionComponent<IGifItem> = ({details, onFavoritesUpdate}) => {

    const [isFavorite, setIsFavorite] = useState(false);

    function toggleFavorites() {
        setIsFavorite(!isFavorite);
        console.log(isFavorite);
        onFavoritesUpdate && onFavoritesUpdate(isFavorite, details.id);
    }

    return <section style={{float: 'left'}} className="app-gifItem" id={details.id}>
        <img src={details.imageUrl} alt={details.title}/>
        <h3>
            {details.title}
             <b>{details.id}</b>
        </h3>
        <button onClick={()=>toggleFavorites()}>
            {toggleFavoriteText(isFavorite)}
        </button>
    </section>;
}

export default GifItemComponent;