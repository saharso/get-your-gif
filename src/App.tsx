import React, {Suspense, useRef, useEffect} from "react";
import { BrowserRouter, Router, Route, Switch, HashRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import HeaderComponent from './components/header/headerCompoment';
import MainComponent from "./components/main/mainCompoment";
import routes from './models/routes/routes'

function Main(){
    return <div><Link to="/another">go somewhere else</Link></div>
}
const Another = React.lazy(() => import('./Another.jsx'));

function App() {
  return <>
    <BrowserRouter basename="/">
      <HeaderComponent title="Get your Gif" routes={routes}/>
      <MainComponent routes={routes}/>
    </BrowserRouter>
  </>
};

export default App;