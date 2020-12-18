import React from 'react';
import Header from './navbar'
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Medico from './medico/Medico';
import  HistorialClinico from "./historial/HistorialClinico";
import  Paciente from "./paciente/Paciente";
import Turno from "./turno/Turno";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
        {/* <Header></Header> */}
            
          <Switch>
        
            <Route path="/medico">
              <Medico />
            </Route>
            <Route path="/paciente">
              <Paciente />
            </Route>
            <Route path="/turno">
              <Turno />
            </Route>
            <Route path="/historialclinico">
              < HistorialClinico />
            </Route>
            <Route path='/'>
              <Home></Home>
            </Route>
          </Switch>  
        </div>
      </BrowserRouter>
    
    );
  }
}

export default App;