
import React from "react";

import { listMedico } from "../ApiMedico";
import { Switch, Route, withRouter, Link  } from "react-router-dom";
import MedicoDetail from "./MedicoDetail";
import NewMedico from "./Newmedico";
import ListMedico from "./MedicoList";
import MedicoEditar from './MedicoEditar';
import EliminarMedico from './EliminarMedico';
import MedicoFilter from './MedicoFilter'


class Medico extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      medicos:'',
      filtro: '',
      filteredMedicos:''
    };

    this.onFiltroChanged = this.onFiltroChanged.bind(this);
  }

  loadMedico() {
    const medicos = listMedico();
    this.setState({
       medicos: medicos,
      filteredMedicos: medicos
    });
  }
  
  componentDidMount() {
    this.loadMedico();
  }

  onFiltroChanged(e) {
    const f = this.state.filtro.toUpperCase();

    const filtrados = (this.state.medicos &&
      this.state.medicos.filter(i => (
        i.apellido.toUpperCase().indexOf(f) !== -1 || 
        i.nombre.toUpperCase().indexOf(f) !== -1))) || [];

    this.setState({
      filtro: e.target.value,
      filteredmedicos: filtrados
    });
  }

  onNewMedico() {
    this.loadMedico();
  }

  render() {
    console.log('match', this.props.match);
    console.log(this.state.medicos, 'que es esto 1');
    console.log(this.state.filtro, 'que es esto');
    return (
      <React.Fragment>
        
       
        
         
           <Switch>
                 <Route path={`${this.props.match.path}/nuevo`}>
                  <NewMedico onNewMedico={this.onNewMedico.bind(this)} />
                   
                </Route>
                <Route path={`${this.props.match.path}/eliminar`}>
                  <EliminarMedico onNewMedico={this.onNewMedico.bind(this)} />
                   
                </Route>
                <Route path={`${this.props.match.path}/editar`}>
                <MedicoEditar  medicos={this.state.filteredMedicos}/>
                </Route> 
                <Route path={`${this.props.match.path}/:medicoId`}>
                  <MedicoDetail/>
                </Route >
                <Route path={`${this.props.match.path}/editar/:medicoId`}>
                  <MedicoEditar/>
                </Route >
               
                <Route exact path={this.props.match.path}> 
                {/* <MedicoFilter filtro={this.state.filtro}
                    onFiltroChanged={this.onFiltroChanged} /> */}
                  <ListMedico medicos={this.state.filteredMedicos}/>
                </Route>
              </Switch>
       
       
            </React.Fragment>
    );
  }
}

export default withRouter(Medico);