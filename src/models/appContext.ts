import React from 'react';
import StateModel from './stateModel';

export const initialState = new StateModel();
export const AppContext = React.createContext<any>({state: initialState, dispatch: undefined});