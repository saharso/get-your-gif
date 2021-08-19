import { StateModel } from '../models/store';
import IAction from '../ts/actions.interface';

export default function favorites(state: StateModel, action: IAction){
    let clonedState: StateModel;
    function add (){
        clonedState = {...state};
        clonedState.favoritesMap.set(action.payload.id, action.payload);
        return clonedState;
    }
    function remove(){
        clonedState = {...state};
        clonedState.favoritesMap.delete(action.payload.id);
        return clonedState;;
    }
    return {
        add, remove,
    }
}