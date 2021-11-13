import './app.scss';
import Home from './Components/Home/Home';
import Start from './Components/Start/Start';
import Foro from './Components/Foro/Foro';
import Footer from './Components/Footer/Footer';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return <>
    <Home/>
  <LogIn/>
  <Register/>
  </>
}

export default App;
