import React, { Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { get, close, reopen } from "../ApiMedico";
import "./medicoDetail.css";
import Badge from "react-bootstrap/Badge";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from "react-bootstrap/Button";
import { Formik, Form as FormikForm, Field } from "formik";
import moment from "moment";
import Navs from '../nav'

class MedicoDetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {};
  }

  componentDidMount() {
    this.loadMedico();
  }

  loadMedico() {
    const id = Number(this.props.match.params.medicoId);
    const medico = get(id);
    console.log(id);
    this.setState({ medico});
  }

  onSuspender() {
    const { medico } = this.state;
    close(medico.id);
    this.loadMedico();
  }

  onActivar() {
    reopen(this.state.medico.id);
    this.loadMedico();
  }

  render() {

    const { medico } = this.state;
    console.log('medico',medico);
    return (
      <Fragment>
        <Navs></Navs>
         <Breadcrumb>
              <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
              <Breadcrumb.Item href="/medico">Medico</Breadcrumb.Item>
              <Breadcrumb.Item active>Inormacion Medico
              </Breadcrumb.Item>
            </Breadcrumb>

      <div className='container'>
      <h2 className="text-center mt-4">Estado  Medico</h2> 
         
      
        
      {medico &&
        <div className= 'row'>

              <div className= 'col-8'> 
              <h3>{medico.nombre} {medico.apellido} <span className="id">{`#${medico.id}`}</span></h3>
              
              {medico.estado === 'activo' && <Badge variant="success">Activo</Badge>}
              {medico.estado === 'suspendido' && <Badge variant="danger">Fuera de servicio</Badge>}
              <span className="usuario"><h4>{medico.Nombre}</h4></span>
              <span className="fecha"> Medico Registrado {moment.unix(medico.fecha).fromNow()}</span>
              <div className="contenido">
                
              </div>
          </div> 
          
          
        <div className= 'col-2'>
          {medico.estado === 'suspendido' &&
                      <div className="estado">
                        <Button onClick={this.onActivar.bind(this)}>Activar</Button>
                        
                      </div>
                    }
                    {medico.estado === 'activo' &&
                      <div className="estado">
                        <Button    onClick={this.onSuspender.bind(this)}>Suspender</Button>
                        
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

export default withRouter(MedicoDetail)