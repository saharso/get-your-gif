import { BrowserRouter } from "react-router-dom";
import HeaderComponent from './components/header/headerCompoment';
import MainComponent from "./components/main/mainCompoment";
import routes from './models/routes/routes';

function App() {
  return <>
    <BrowserRouter basename="/">
      <HeaderComponent title="Get your Gif" routes={routes}/>
      <MainComponent routes={routes}/>
    </BrowserRouter>
  </>
};

export default App;