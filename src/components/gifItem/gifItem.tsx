import {useState, useContext, useEffect} from 'react';
import ActionsEnum from '../../models/actions.enum';
import { AppContext } from '../../models/appContext';
import GifItemSchema from '../../models/gifItemSchema';
import StateModel from '../../models/stateModel';

export interface IGifItem {
    details: GifItemSchema;
}

function getInitialFavoriteState(state: StateModel, id: string) {
    return state.favoritesMap.has(id);
}

const GifItemComponent: React.FunctionComponent<IGifItem> = ({details}) => {
    const { state, dispatch } = useContext(AppContext);
    const [isFavorite, setIsFavorite] = useState(getInitialFavoriteState(state, details.id));
    const [buttonLabel, setButtonLabel] = useState('');
    
    useEffect(() =>{
        setButtonLabel(isFavorite ? 'Remove from favorites' : 'Add to favorites');
        isFavorite ?
            dispatch({type: ActionsEnum.ADD_TO_FAVORITES, payload: details}) :
            dispatch({type: ActionsEnum.REMOVE_FROM_FAVORITES, payload: details});
    }, [isFavorite]);

    return <section style={{float: 'left'}} className="app-gifItem" id={details.id}>
        <img src={details.imageUrl} alt={details.title}/>
        <h3>
            {details.title}
             <b>{details.id}</b>
        </h3>
        <button onClick={()=>setIsFavorite(!isFavorite)}>
            {buttonLabel}
        </button>
    </section>;
}

export default GifItemComponent;