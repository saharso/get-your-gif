import ActionsEnum from '../../models/actions.enum';
import { IFavoriteUpdates } from '../gifItemsGallery/gifItemsGallery';


function RoutesController(dispatch: Function) {
    function queryDispatches(query: string) {
        console.log(!!query.trim())
        if(!query.trim()) return;
        dispatch({type: ActionsEnum.SEARCH_QUERY, payload: query});
        dispatch({type: ActionsEnum.UPDATE_HISTORY, payload: query});
    }
    
    function favoriteDispatches(favoriteUpdate?: IFavoriteUpdates) {
        if(!favoriteUpdate) return;
        favoriteUpdate && favoriteUpdate.isFavorite ? 
            dispatch({type: ActionsEnum.ADD_TO_FAVORITES, payload: favoriteUpdate.item}) :
            dispatch({type: ActionsEnum.REMOVE_FROM_FAVORITES, payload: favoriteUpdate?.item});
    }
    
    return {queryDispatches, favoriteDispatches}   
}
export default RoutesController;