import StateModel from './stateModel';
import ActionsEnum from './actions.enum';
import IAction from '../ts/actions.interface';

function reducer(state: any, action: IAction): Partial<StateModel> {
    switch (action.type) {
      case ActionsEnum.SEARCH_QUERY:
        return {...state, searchQuery: action.payload};
      default:
        throw new Error();
    }
}

export default reducer;