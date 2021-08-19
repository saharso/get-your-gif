
import './App.scss';
import React, {useReducer} from 'react';
import { BrowserRouter } from "react-router-dom";
import HeaderComponent from './components/header/headerCompoment';
import MainComponent from "./components/main/mainCompoment";
import routes from './models/routes';
import reducer from './models/reducer';
import { AppContext, initialState } from './models/appContext';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{state, dispatch}}>
      <BrowserRouter basename="/">
        <HeaderComponent title="Get your Gif" routes={routes}/>
        <MainComponent routes={routes}/>
      </BrowserRouter>
    </AppContext.Provider>
};

export default App;
