import React, { Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { get, close, reopen } from "../ApiPacientes";
import "../medico/medicoDetail.css";
import Badge from "react-bootstrap/Badge";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from "react-bootstrap/Button";
import { Formik, Form as FormikForm, Field } from "formik";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import Navs from '../nav'

class PacienteDetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {};
  }

  componentDidMount() {
    this.loadPaciente();
  }

  loadPaciente() {
    const id = Number(this.props.match.params.pacienteId);
    const paciente = get(id);
    console.log(id);
    this.setState({ paciente});
  }

  onSuspender() {
    const { paciente } = this.state;
    close(paciente.id);
    this.loadPaciente();
  }

  onActivar() {
    reopen(this.state.paciente.id);
    this.loadPaciente();
  }

  render() {

    const { paciente } = this.state;
    console.log('ciente',paciente);
    return (
      <Fragment>
        <Navs/>
         <Breadcrumb>
              <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
              <Breadcrumb.Item href="/paciente">Paciente</Breadcrumb.Item>
              <Breadcrumb.Item active>Información Paciente
              </Breadcrumb.Item>
            </Breadcrumb>

      <div className='container'>
      <h2 className="text-center mt-4">Estado Paciente</h2> 
         
      
        
      {paciente &&
        <div className='row'> 
         <div className='col-8'>
               <h3>{paciente.nombre} {paciente.apellido} <span className="id">{`#${paciente.id}`}</span></h3>
              {paciente.estado === 'activo' && <Badge variant="success">Activo</Badge>}
              {paciente.estado === 'suspendido' && <Badge variant="danger">Fuera de servicio</Badge>}
              <span className="usuario"><h4>{paciente.Nombre}</h4></span>
              <span className="fecha"> paciente Registrado {moment.unix(paciente.fecha).fromNow()}</span>
         </div>
          
          <div className='col-2'>
                 {paciente.estado === 'suspendido' &&
                    <div className="estado">
                      <Button onClick={this.onActivar.bind(this)}>Activar</Button>
          
                    </div>
                  }
                  {paciente.estado === 'activo' &&
                    <div className="estado">
                      <Button onClick={this.onSuspender.bind(this)}>Suspender</Button>
                      
                    </div>
                  }
          </div>
          
         
        </div>
      }
      
    
    </div>
    
      </Fragment>
   
    );
  }

}

export default withRouter(PacienteDetail)