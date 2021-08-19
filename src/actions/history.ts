import { StateModel } from '../models/store';
import IAction from '../ts/actions.interface';

const historySet = new Set<string>();

export default function history(state: StateModel, action: IAction){
    const clone = {...state};
    if(!action.payload) return clone; 
    historySet.add(action.payload);
    clone.searchHistory = Array.from(historySet);
    
    return clone;
}