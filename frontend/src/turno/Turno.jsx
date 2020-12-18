import React, { Fragment } from 'react'
import { Switch, Route, withRouter, Link  } from "react-router-dom";
import { listTurno } from "../ApiTurno";
import {sampleData} from '../ApiTurno';
import TurnoList from './TurnoList';
import NuevoTurno from './NuevoTurno';
import TurnoEditar from './TurnoEditar';
import CancelarTurno from './CancelarTurno';



class Turno extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        turnos:sampleData,
        filtro: '',
        filteredTurnos:sampleData
      };
  
      this.onFiltroChanged = this.onFiltroChanged.bind(this);
    }
  
    loadTurno() {
      const turnos = listTurno();
      this.setState({
         turnos: turnos,
        filteredTurnos: turnos
      });
    }
    
    componentDidMount() {
      this.loadTurno();
    }
  
    onFiltroChanged(e) {
      const f = this.state.filtro.toUpperCase();
  
      const filtrados = (this.state.turnos &&
        this.state.turnos.filter(i => (
          i.nombre.toUpperCase().indexOf(f) !== -1 || 
          i.cuil.toUpperCase().indexOf(f) !== -1 || 
          i.apellido.toUpperCase().indexOf(f) !== -1))) || [];
  
      this.setState({
        filtro: e.target.value,
        filteredturnos: filtrados
      });
    }
  
    onNewTurno() {
      this.loadTurno();
    }
  
    render() {
      console.log('match', this.props.match);
      return (
  
        <Fragment>
             <Switch>
             <Route path={`${this.props.match.path}/nuevo`}>
                  <NuevoTurno onNewTurno={this.onNewTurno.bind(this)} />
                </Route>
                <Route path={`${this.props.match.path}/editar`}>
                <TurnoEditar/>
                </Route>  
                <Route path={`${this.props.match.path}/:turnoId`}>
                <CancelarTurno turnos={this.state.filteredTurnos}/> 
                </Route>     
                <Route exact path={this.props.match.path}>
                  <TurnoList turnos={this.state.filteredTurnos}/>
                </Route>
                 

           
             </Switch>
          
                 
        </Fragment>
    )
}
}
export default  withRouter(Turno)
