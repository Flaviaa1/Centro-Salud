import React, { Fragment } from 'react';
import { Switch, Route,  withRouter } from "react-router-dom";
import EditarHistorial from "./EditarHistorial";
import HistorialDetail from './HistorialDetail';
import NuevoHistorialClinico from './NuevoHistorialClinico';
import { listHistorial, sampleData } from '../ApiHistorial';
import { listObservacion } from '../ApiObservaciones';
import ListHistorial from "./ListHistorial";
import ListaObservaciones from './ListaObservaciones';
import NuevasObservaciones from './NuevasObservaciones';


class HistorialClinico extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          historiales:sampleData,
          filtro: '',
          filteredHistorial:sampleData,
          observaciones:''
        };
        this.onFiltroChanged = this.onFiltroChanged.bind(this);

      }
    
      loadHistorial() {
        const historiales = listHistorial();
        this.setState({
           historiales: historiales,
          filteredHistoriales: historiales,
          
        });
      }
      loadObservacion(){
        const observaciones = listObservacion();
        this.setState({
          observaciones:observaciones
        })

      }
      
      componentDidMount() {
        this.loadHistorial();
        this.loadObservacion();
      }
      onFiltroChanged(e) {
        const f = this.state.filtro.toUpperCase();
    
        const filtrados = (this.state.historiales &&
          this.state.historiales.filter(i => (
            i.paciente.toUpperCase().indexOf(f) !== -1 || 
            i.encerfemdad.toUpperCase().indexOf(f) !== -1 || 
            i.alergias.toUpperCase().indexOf(f) !== -1))) || [];
    
        this.setState({
          filtro: e.target.value,
          filteredhistorial: filtrados
        });
      }
      onNewHistorial() {
        this.loadHistorial();
      }
      onNewObservacion() {
        this.loadObservacion();
      }
      on
      render(){
        console.log('match', this.props.match);
        return (
          <React.Fragment>
            
            <div>
              
               <Switch>
                 <Route  path={`${this.props.match.path}/observaciones`}>
                      <ListaObservaciones observaciones= {this.state.observaciones}/>
                    </Route>
                    <Route  path={`${this.props.match.path}/nuevaobservacion`}>
                      <NuevasObservaciones  onNewObservacion={this.onNewObservacion.bind(this)}/>
                    </Route>
                    <Route path={`${this.props.match.path}/nuevo`}>
                      <NuevoHistorialClinico   onNewHistorial={this.onNewHistorial.bind(this)} />
                    </Route>
                    <Route path={`${this.props.match.path}/actualizar`}>
                    <EditarHistorial/>
                    </Route>
                    <Route path={`${this.props.match.path}/:historialId`}>
                      <HistorialDetail/>
                    </Route >
                    
                    <Route exact path={this.props.match.path}>
                      <ListHistorial historiales={this.state.filteredHistoriales}/>
                    </Route>
                  </Switch>
           
            </div>
                </React.Fragment>
        );

      }
  
}

export default  withRouter(HistorialClinico)
