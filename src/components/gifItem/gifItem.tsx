import {useState, useContext, useEffect} from 'react';
import GifItemSchema from '../../models/gifItemSchema';

export interface IGifItem {
    details: GifItemSchema;
}
const GifItemComponent: React.FunctionComponent<IGifItem> = ({details}) => {
    const [isFavorite, setIsFavorite] = useState(details.isFavorite);
    const [buttonLabel, setBUttonLabel] = useState('')
    useEffect(() =>{
        setBUttonLabel(isFavorite ? 'Remove from favorites' : 'Add to favorites');
    }, [isFavorite])
    return <section className="app-gifItem" id={details.id}>
        <img src={details.imageUrl} alt={details.title}/>
        <h3>
            {details.title}
        </h3>
        <button onClick={()=>setIsFavorite(!isFavorite)}>
            {buttonLabel}
        </button>
    </section>;
}

export default GifItemComponent;