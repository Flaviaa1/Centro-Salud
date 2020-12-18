
import React from "react";
import { listPaciente } from "../ApiPacientes";
import { Switch, Route, withRouter, Link  } from "react-router-dom";
import PacienteDetail from "./PacienteDetail";
import {sampleData} from "../ApiPacientes";
import NuevoPaciente from "./NuevoPaciente";
import ListPaciente from "./PacienteList";
import PacienteEditar from './PacienteEditar';
import EliminarPaciente from './EliminarPaciente'


class Paciente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pacientes:sampleData,
      filtro: '',
      filteredPacientes:sampleData
    };

    this.onFiltroChanged = this.onFiltroChanged.bind(this);
  }

  loadPaciente() {
    const pacientes = listPaciente();
    this.setState({
       pacientes: pacientes,
      filteredPacientes: pacientes
    });
  }
  
  componentDidMount() {
    this.loadPaciente();
  }

  onFiltroChanged(e) {
    const f = this.state.filtro.toUpperCase();

    const filtrados = (this.state.pacientes &&
      this.state.pacientes.filter(i => (
        i.nombre.toUpperCase().indexOf(f) !== -1 || 
        i.cuil.toUpperCase().indexOf(f) !== -1 || 
        i.apellido.toUpperCase().indexOf(f) !== -1))) || [];

    this.setState({
      filtro: e.target.value,
      filteredpacientes: filtrados
    });
  }

  onNewPaciente() {
    this.loadPaciente();
  }

  render() {
    console.log('match', this.props.match);
    return (
      <React.Fragment>
        
        <div className=''>
        
         
           <Switch>
                 <Route path={`${this.props.match.path}/nuevo`}>
                  <NuevoPaciente onNewPaciente={this.onNewPaciente.bind(this)} />
                </Route>
                <Route path={`${this.props.match.path}/editar`}>
                <PacienteEditar/>
                </Route>
                <Route path={`${this.props.match.path}/eliminar`}>
                <EliminarPaciente/>
                </Route>
                <Route path={`${this.props.match.path}/:pacienteId`}>
                  <PacienteDetail/>
                </Route >
                <Route path={`${this.props.match.path}/editar/:pacienteId`}>
                  <PacienteEditar/>
                </Route >
                
                <Route exact path={this.props.match.path}>
                  <ListPaciente pacientes={this.state.filteredPacientes}/>
                </Route>
              </Switch>
       
        </div>
            </React.Fragment>
    );
  }
}

export default withRouter(Paciente)

