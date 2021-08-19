import StateModel from './stateModel';
import ActionsEnum from './actions.enum';
import IAction from '../ts/actions.interface';
let _state;
function reducer(state: any, action: IAction): Partial<StateModel> {
    switch (action.type) {
      case ActionsEnum.SEARCH_QUERY:
        return {...state, searchQuery: action.payload};
      case ActionsEnum.ADD_TO_FAVORITES:
        _state = {...state};
        _state.favoritesMap.set(action.payload.id, action.payload);
        debugger;
        return _state;
      case ActionsEnum.REMOVE_FROM_FAVORITES:
        _state = {...state};
        _state.favoritesMap.delete(action.payload.id);
        return _state;;
      default:
        throw new Error();
    }
}

export default reducer;