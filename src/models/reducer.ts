import { StateModel } from './store';
import ActionsEnum from './actions.enum';
import IAction from '../ts/actions.interface';
import favorites from '../actions/favorites';
import history from '../actions/history';

function reducer(state: StateModel, action: IAction): StateModel {
    switch (action.type) {
      case ActionsEnum.SEARCH_QUERY: return {...state, searchQuery: action.payload};
      case ActionsEnum.ADD_TO_FAVORITES: return favorites(state as StateModel, action).add()
      case ActionsEnum.REMOVE_FROM_FAVORITES: return favorites(state, action).remove();
      case ActionsEnum.UPDATE_HISTORY: return history(state, action);
      default:
        throw new Error();
    }
}

export default reducer;