import store, { StateModel } from './store';
import ActionsEnum from './actions.enum';
import IAction from '../ts/actions.interface';
import IPojo from '../ts/pojo.interface';
import favorites from '../actions/favorites';

function reducer(state: IPojo, action: IAction): Partial<StateModel> {
    switch (action.type) {
      case ActionsEnum.SEARCH_QUERY: return {...state, searchQuery: action.payload};
      case ActionsEnum.ADD_TO_FAVORITES: return favorites(state, action).add()
      case ActionsEnum.REMOVE_FROM_FAVORITES: return favorites(state, action).remove();
      default:
        throw new Error();
    }
}

export default reducer;