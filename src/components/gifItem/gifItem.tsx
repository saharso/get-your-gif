import './gifItem.scss'
import {useState} from 'react';
import GifItemSchema from '../../models/gifItemSchema';
import Button from '../../ui/button/button';
export interface IGifItemParams {
    details: GifItemSchema;
    onFavoritesUpdate?: (isFavorite: boolean, itemId: GifItemSchema) => void;
}

function toggleFavoriteText(condition: boolean){
    return condition ? 'Remove from favorites' : 'Add to favorites'
}

const GifItemComponent: React.FunctionComponent<IGifItemParams> = ({details, onFavoritesUpdate}) => {
    const [isFavorite, setIsFavorite] = useState(details.isFavorite);
    function toggleFavorites() {
        setIsFavorite(!isFavorite);
        onFavoritesUpdate && onFavoritesUpdate(!isFavorite, details);
    }

    return <section className="gyg-gifItem" id={details.id}>
        <figure className="gig-gifItem__image">
            <img src={details.imageUrl} alt={details.title}/>
        </figure>
        <div className="gig-gifItem__info">
            <Button 
                onClick={()=>toggleFavorites()} 
                label={toggleFavoriteText(isFavorite)}
                isActive={isFavorite}
                className="space-row"
            />
            <h3>
                {details.title} {isFavorite}
            </h3>
        </div>
    </section>;
}

export default GifItemComponent;