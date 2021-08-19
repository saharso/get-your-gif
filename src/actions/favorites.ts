import IAction from '../ts/actions.interface';
import IPojo from '../ts/pojo.interface';

export default function favorites(state: IPojo, action: IAction){
    let _state;
    function add (){
        _state = {...state};
        _state.favoritesMap.set(action.payload.id, action.payload);
        return _state;
    }
    function remove(){
        _state = {...state};
        _state.favoritesMap.delete(action.payload.id);
        return _state;;
    }
    return {
        add, remove,
    }
}